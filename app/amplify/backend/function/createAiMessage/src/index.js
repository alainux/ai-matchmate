/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_AIMATCHMATE_GRAPHQLAPIENDPOINTOUTPUT
	API_AIMATCHMATE_GRAPHQLAPIIDOUTPUT
	API_AIMATCHMATE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require('aws-sdk');
const OpenAI = require('openai');

const GRAPHQL_ENDPOINT = process.env.API_AIMATCHMATE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_AIMATCHMATE_GRAPHQLAPIKEYOUTPUT;




const SYSTEM_MESSAGE =
  'You are a trained psychologist with expertise in creating psychological profiles. Your purpose is to engage with the user in a respectful, understanding, and non-judgmental manner. Ask probing questions to understand their personality, preferences, and emotional state. Based on their responses, update their psychological profile and occasionally provide a concise, positive, and relatable description of their personality. Ensure the conversation remains professional, enjoyable and maintain confidentiality. Aim to make the user feel comfortable and heard, and the conversation should flow naturally. Remember, your goal is to understand and represent them accurately. This information will be used for a match-making service.';

async function updateProfileTraits(userId, traits) {
  const query = /* GraphQL */ `
    mutation UpdateProfileTraits($input: UpdateProfileInput!) {
      updateProfile(input: $input) {
        id
      }
    }
  `;

  const variables = {
    input: {
      id: userId,
      traits: JSON.stringify(traits),
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

  const res = await fetch(GRAPHQL_ENDPOINT, options);

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  const resJSON = await res.json();

  return resJSON;
}
// @ts-check
async function getRecentMessages(userId) {
  const query = /* GraphQL */ `
    query GetMessages($profileId: ID!) {
      messagesByProfileIdAndCreatedAt(
        profileId: $profileId
        sortDirection: DESC
        limit: 10
      ) {
        items {
          id
          content
          metadata
          sender
          createdAt
        }
      }
    }
  `;

  const variables = {
    profileId: userId,
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
    const error = await res.text();
    throw new Error(error);
  }

  const resJSON = await res.json();
  const messages = resJSON.data.messagesByProfileIdAndCreatedAt.items || [];
  const messagesProcessed = messages
    .map(message => ({
      ...message,
      metadata: message.metadata ? JSON.parse(message.metadata) : {},
    }))
    .reverse();

  return messagesProcessed;
}

async function createMessage(userId, messageContent, sender, metadata) {
  const query = /* GraphQL */ `
    mutation CreateMessage(
      $userId: ID!
      $messageContent: String!
      $metadata: AWSJSON
    ) {
      createMessage(
        input: {
          content: $messageContent
          profileId: $userId
          sender: ${sender}
          metadata: $metadata
        }
      ) {
        id
      }
    }
  `;

  const variables = {
    userId,
    messageContent,
    metadata: JSON.stringify(metadata),
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
    const error = await res.text();
    throw new Error(error);
  }

  const resJSON = await res.json();

  return resJSON;
}

const getOpenAIAPIKeySecret = async () => {
  const { Parameters } = await (new aws.SSM())
    .getParameters({
      Names: ["OPENAI_API_KEY"].map(secretName => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  const apiKeySecret = Parameters.find(param => param.Name === process.env.OPENAI_API_KEY)
  if (!apiKeySecret) {
    throw new Error('Missing OpenAI API key secret');
  }
  return apiKeySecret;
}

// @ts-check
exports.handler = async event => {

  if (!event || !event.arguments) {
    return {
      statusCode: 400,
      body: 'Invalid arguments',
    };
  }

  // Initialize openai  
  const openAIAPIKeySecret = await getOpenAIAPIKeySecret();
  const openai = new OpenAI({
    apiKey: openAIAPIKeySecret.Value,
  });

  try {
    const userMessage = event.arguments.message;
    const currentProfile = event.arguments.currentProfile;
    const userId = event.arguments.userId;

    const messageHistory = await getRecentMessages(userId);

    // const chatMessage = `Given the user's previous psychological profile: ${JSON.stringify(currentProfile)}, their recent message: "${userMessage}", and their profiling stage: ${currentProfile.profiling_stage}, with a total profiling progress of ${currentProfile.profiling_progress}, update the profile, provide the refined traits, suggest the next question, and if possible, offer a concise and relatable description of their personality in the third-person.`;

    const completionsMessages = [
      {
        role: 'system',
        content: SYSTEM_MESSAGE,
      },
      ...messageHistory.map(message =>
        message.sender === 'AI'
          ? {
              role: 'assistant',
              content: message.content,
              function_call: {
                name: 'updateUserPsychologyProfileAndRespondMessage',
                arguments: JSON.stringify({
                  ...message.metadata.profileSnapshot,
                  next_message: message.content,
                }),
              },
            }
          : {
              role: 'user',
              content: message.content,
            },
      ),
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await openai.chat.completions.create({
      messages: completionsMessages,
      functions: [
        {
          name: 'updateUserPsychologyProfileAndRespondMessage',
          description:
            "Update the user's profile with the new traits object and respond with a follow-up question or message",
          parameters: {
            type: 'object',
            default: currentProfile,
            name: 'profile',
            description: "The user's psychological profile",
            properties: {
              emotional_stability: { type: 'number', minimum: 0, maximum: 10 },
              extraversion: { type: 'number', minimum: 0, maximum: 10 },
              openness: { type: 'number', minimum: 0, maximum: 10 },
              agreeableness: { type: 'number', minimum: 0, maximum: 10 },
              conscientiousness: { type: 'number', minimum: 0, maximum: 10 },
              profiling_stage: {
                type: 'string',
                description:
                  "A measure of depth in the user's current psychological profile. Dictates how complex the questions should be.",
                enum: ['initial', 'intermediate', 'advanced'],
              },
              personality_description: {
                type: 'string',
                description:
                  "The user's personality description in relatable terms. This will be shown to other users. Should be written in third-person.",
                maxLength: 180,
              },
              next_message: {
                type: 'string',
                description:
                  'A message or question that will be sent to the user to continue building the psychological profile.',
                maxLength: 180,
              },
            },
          },
          required: [
            'emotional_stability',
            'extraversion',
            'openness',
            'agreeableness',
            'conscientiousness',
            'profiling_stage',
            'personality_description',
            'question_number',
            'profiling_progress',
            'next_message',
          ],
        },
      ],
      function_call: { name: 'updateUserPsychologyProfileAndRespondMessage' },
      model: 'gpt-4',
      user: userId,
    });

    const responseChoice = response.choices[0];
    const responseArguments = JSON.parse(
      responseChoice.message.function_call.arguments,
    );

    // Create the user's message:
    await createMessage(userId, userMessage, 'USER');

    const { next_message, ...profile } = responseArguments;
    // Update the user's profile in the database
    const newProfile = {
      ...currentProfile,
      ...profile
    };
    await updateProfileTraits(userId, newProfile);

    // Create response message:
    await createMessage(userId, responseArguments.next_message, 'AI', { profileSnapshot: newProfile });

    return JSON.stringify({
      profile,
      nextMessage: next_message,
    });
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }

  // Example response:
  //   {
  //     "statusCode": 200,
  //     "responseArguments": {
  //       "emotional_stability": 0.7,
  //       "extraversion": 0.55,
  //       "openness": 0.9,
  //       "agreeableness": 0.65,
  //       "conscientiousness": 0.85,
  //       "profiling_stage": "intermediate",
  //       "personality_description": "John is a dedicated engineer who tends to keep to himself, but enjoys social engagements with close friends. He is open-minded, reliable, and able to handle stress well.",
  //       "next_message": "Can you tell me about a situation when you had to overcome a major challenge?"
  //     },
  //     "nextMessage": "Can you tell me about a situation when you had to overcome a major challenge?"
  //   }
};
