/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onCreateMatch(filter: $filter, owner: $owner) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onUpdateMatch(filter: $filter, owner: $owner) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $filter: ModelSubscriptionMatchFilterInput
    $owner: String
  ) {
    onDeleteMatch(filter: $filter, owner: $owner) {
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
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onCreateChatMessage(filter: $filter, owner: $owner) {
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
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onUpdateChatMessage(filter: $filter, owner: $owner) {
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
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
    $owner: String
  ) {
    onDeleteChatMessage(filter: $filter, owner: $owner) {
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
