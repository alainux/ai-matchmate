/* Amplify Params - DO NOT EDIT
	API_AIMATCHMATE_GRAPHQLAPIENDPOINTOUTPUT
	API_AIMATCHMATE_GRAPHQLAPIIDOUTPUT
	API_AIMATCHMATE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const GRAPHQL_ENDPOINT = process.env.API_AIMATCHMATE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_AIMATCHMATE_GRAPHQLAPIKEYOUTPUT;

async function createMatch() {
  const query = /* GraphQL */ `
    mutation CreateMatch($input: CreateMatchInput!) {
      createMatch(input: $input) {
        id
      }
    }
  `;

  const variables = {
    input: {},
  };

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };

  return await fetch(GRAPHQL_ENDPOINT, options);
}

async function assignProfilesToMatch(matchId, profileId) {
  const query = /* GraphQL */ `
    mutation CreateProfilesToMatches(
      $input: CreateProfilesToMatchesInput!
    ) {
      createProfilesToMatches(input: $input) {
        id
      }
    }
  `;

  const variables = {
    input: {
      matchId,
      profileId
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };
  return await fetch(GRAPHQL_ENDPOINT, options);
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  console.log(`CREATE MATCH EVENT: ${JSON.stringify(event)}`);
  const response = {
    data: {}
  };

  try {
    const matchResponse = await createMatch();
    const match = await matchResponse.json();
    response.data.createMatch = match.data.createMatch;

    
    const matchId = match.data.createMatch.id;
    console.log('MATCH created successfully', JSON.stringify(match, null, 4));

    if (!matchId) {
      response.statusCode = 500;
      response.message = 'Could not create match';
      throw new Error('Could not create match');
    }

    const profileIds = event.profileIds || [];
    const relations = await Promise.all(profileIds.map(async profileId => {
      const res = await assignProfilesToMatch(matchId, profileId)
      const relation = await res.json();
      console.log('PROFILE MATCH created successfully', JSON.stringify(relation, null, 4));
      return relation.data;
    }));
    
    response.data.createProfilesToMatches = relations.map(r => r.createProfilesToMatches);

    console.log('MATCH operation completed', JSON.stringify(response.data, null, 4));
    response.statusCode = 200;
  } catch (error) {
    response.statusCode = 400;
    response.body = {
      errors: [
        {
          message: error.message,
          stack: error.stack,
        },
      ],
    };
  }

  return {
    ...response,
    body: JSON.stringify(response.body),
  };
};
