/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const GRAPHQL_ENDPOINT = process.env.API_AIMATCHMATE_GRAPHQLAPIENDPOINTOUTPUT;
  const GRAPHQL_API_KEY = process.env.API_AIMATCHMATE_GRAPHQLAPIKEYOUTPUT;

  const query = /* GraphQL */ `
    mutation CreateProfile($input: CreateProfileInput!) {
      createProfile(input: $input) {
        id
      }
    }
  `;

  console.log('GOT USER EVENT', JSON.stringify(event, null, 4));

  const variables = {
    input: {
      id: event.request.userAttributes.sub,
      name: 'No name',
      email: event.request.userAttributes.email,
      bio: 'No bio',
      contactInfo: 'No contact info',
      profileImage: 'https://picsum.photos/id/1005/400/400',
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

  const response = {};

  try {
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    response.data = await res.json();

    if (response.data.errors) {
      response.statusCode = 400;
    }

    console.log('USER creation success');
  } catch (error) {
    console.log('ERROR creating user', error);
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
