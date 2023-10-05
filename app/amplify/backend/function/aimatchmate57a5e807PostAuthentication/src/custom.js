/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
  region: 'eu-north-1' //change to your region
});


const GRAPHQL_ENDPOINT = process.env.API_AIMATCHMATE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_AIMATCHMATE_GRAPHQLAPIKEYOUTPUT;
const FUNCTION_CREATEMATCH_NAME = process.env.FUNCTION_CREATEMATCH_NAME;

const TRAIT_MAX = 10;
const THRESHOLD = 0.8; // to be considered a match

function getTraitValueCompatibility(traitValueA, traitValueB) {
  const difference = Math.abs(traitValueA - traitValueB);
  return 1 - (difference / TRAIT_MAX);
}

function getTraitCompatibilityScore(traitA, traitB) {
  // Left for future edge case handling
  return getTraitValueCompatibility(traitA.value, traitB.value);
}

function calculateCompatibility(userATraits, userBTraits) {
  
  const traitScore = {};
  const omitTraits = ['personality_description']

  const allTraitKeys = new Set([ ...Object.keys(userATraits), ...Object.keys(userBTraits) ]);

  // Cleanup unwanted traits
  omitTraits.forEach((v) => allTraitKeys.delete(v));

  for (const traitKey of allTraitKeys) {

    if (traitKey in userATraits && traitKey in userBTraits) {
      
      const compatibilityScore = getTraitCompatibilityScore(
        { key: traitKey, value: userATraits[traitKey] },
        { key: traitKey, value: userBTraits[traitKey] },
      );

      traitScore[traitKey] = compatibilityScore;
    } 
    
  };

  const traitScoreValues = Object.values(traitScore);
  const traitScoreSum = traitScoreValues.reduce((acc, curr) => acc + curr, 0);
  const traitScoreAvg = traitScoreSum / allTraitKeys.size;

  return traitScoreAvg;
}

async function getAllProfilesExcept(userId) {
  const query = /* GraphQL */ `
    query ListProfiles($excludeId: ID!) {
      listProfiles(limit: 1000, filter: {id: {ne: $excludeId}}) {
        items {
          id
          traits
        }
      }
    }
  `;

  const variables = {
    excludeId: userId
  };

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };

  const res = await fetch(GRAPHQL_ENDPOINT, options);

  if (!res.ok) {
    throw new Error('Failed to fetch current user');
  }

  const resJSON = await res.json();

  try {
    return resJSON.data.listProfiles.items;
  } catch (error) {
    console.log('ERROR getting current user', error);
    return resJSON;
  } 
}

async function invokeCreateMatchFunction(match) {
  const invoke = (res, rej) => lambda.invoke({
    FunctionName: FUNCTION_CREATEMATCH_NAME,
    Payload: JSON.stringify(match, null, 2)
  }, function(error, data) {
    if (error) {
      console.log('ERROR while invoking the createMatch function', error);
      rej(error); 
    }

    if (data.Payload) {
      res(data.Payload);
    }
  });

  return new Promise(invoke);
}

async function getCurrentUserProfile(userId) {
  const query = /* GraphQL */ `
    query GetProfile($id: ID!) {
      getProfile(id: $id) {
        id
        traits

        matches {
          items {
            __typename
            id
            match {
              __typename
              id
              compatibility
              profiles {
                items {
                  __typename
                  id
                  profile {
                    __typename
                    id
                    email
                    name
                    profileImage
                    bio
                    contactInfo
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    id: userId
  };

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };

  const res = await fetch(GRAPHQL_ENDPOINT, options);

  if (!res.ok) {
    throw new Error('Failed to fetch current user');
  }

  const resJSON = await res.json();

  try {
    return resJSON.data.getProfile;
  } catch (error) {
    console.log('ERROR getting current user', error);
    return resJSON;
  }
}

async function findMatchesForUser(currentUser, allUsers) {
  const matches = [];
  const currentUserTraits = JSON.parse(currentUser.traits);
  for (let otherUser of allUsers) {
    const otherUserTraits = JSON.parse(otherUser.traits);
    const compatibility = calculateCompatibility(currentUserTraits, otherUserTraits);
    
    if (compatibility >= THRESHOLD) {
      matches.push({
        profileIds: [currentUser.id, otherUser.id],
        compatibility
      });
    }
  }

  return matches;
}

function filterNewMatches(currentProfile, newMatches) {
  if (!currentProfile || !currentProfile.matches || !currentProfile.matches.items || !newMatches) {
      return [];
  }

  const existingMatchIds = currentProfile.matches.items.map(matchItem => {
      if (!matchItem.match || !matchItem.match.profiles || !matchItem.match.profiles.items) {
          return [];
      }
      const ids = matchItem.match.profiles.items.map(profile => profile.profile.id);
      return ids.sort();
  });

  const filteredMatches = newMatches.filter(match => {
      const sortedProfileIds = [...match.profileIds].sort();
      for (const existingIds of existingMatchIds) {
          if (JSON.stringify(existingIds) === JSON.stringify(sortedProfileIds)) {
              return false;
          }
      }
      return true;
  });

  return filteredMatches;
}



exports.handler = async event => {
  if (!GRAPHQL_ENDPOINT || !GRAPHQL_API_KEY) {
    throw new Error('Missing env vars');
  }

  // @ts-check
  console.log(`EVENT: ${JSON.stringify(event, null, 4)}`);

  if (!event.userId) {
    return {
      statusCode: 400,
      body: 'Missing userId',
    };
  }

  try {
    const currentUserProfile = await getCurrentUserProfile(event.userId);
    const allProfiles = await getAllProfilesExcept(event.userId);
    const matches = await findMatchesForUser(currentUserProfile, allProfiles);
    const filteredMatches = filterNewMatches(currentUserProfile, matches);
    
    console.log('Found new matches', JSON.stringify(filteredMatches, null, 4));
    const matchesResponse = await Promise.all(filteredMatches.map(invokeCreateMatchFunction));

    return {
      statusCode: 200,
      body: JSON.stringify(matchesResponse),
    };
  } catch (e) {
    console.log('ERROR in handler', e);
  }
};
