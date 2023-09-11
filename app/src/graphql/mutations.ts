/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      email
      bio
      contactInfo
      profileImage
      matches {
        items {
          id
          content
          sender
          profileID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      chatMessages {
        items {
          id
          content
          sender
          profileID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      email
      bio
      contactInfo
      profileImage
      matches {
        items {
          id
          content
          sender
          profileID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      chatMessages {
        items {
          id
          content
          sender
          profileID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      email
      bio
      contactInfo
      profileImage
      matches {
        items {
          id
          content
          sender
          profileID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      chatMessages {
        items {
          id
          content
          sender
          profileID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      compatibilityScore
      matchTimestamp
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      compatibilityScore
      matchTimestamp
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      compatibilityScore
      matchTimestamp
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
      id
      content
      sender
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
      id
      content
      sender
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
      id
      content
      sender
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
