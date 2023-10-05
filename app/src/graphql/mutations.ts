/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendChatMessage = /* GraphQL */ `
  mutation SendChatMessage(
    $userId: ID!
    $currentProfile: AWSJSON!
    $message: String!
  ) {
    sendChatMessage(
      userId: $userId
      currentProfile: $currentProfile
      message: $message
    ) {
      statusCode
      body
      error
      __typename
    }
  }
`;
export const findMatches = /* GraphQL */ `
  mutation FindMatches($userId: ID!) {
    findMatches(userId: $userId) {
      statusCode
      body
      error
      __typename
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      email
      age
      gender
      bio
      contactInfo
      profileImage
      matches {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      traits
      onboarded
      minAgePreference
      maxAgePreference
      genderPreference
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
      age
      gender
      bio
      contactInfo
      profileImage
      matches {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      traits
      onboarded
      minAgePreference
      maxAgePreference
      genderPreference
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
      age
      gender
      bio
      contactInfo
      profileImage
      matches {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      traits
      onboarded
      minAgePreference
      maxAgePreference
      genderPreference
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
      profiles {
        nextToken
        __typename
      }
      compatibility
      createdAt
      updatedAt
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
      profiles {
        nextToken
        __typename
      }
      compatibility
      createdAt
      updatedAt
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
      profiles {
        nextToken
        __typename
      }
      compatibility
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      profileId
      profile {
        id
        name
        email
        age
        gender
        bio
        contactInfo
        profileImage
        traits
        onboarded
        minAgePreference
        maxAgePreference
        genderPreference
        createdAt
        updatedAt
        __typename
      }
      content
      sender
      metadata
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      profileId
      profile {
        id
        name
        email
        age
        gender
        bio
        contactInfo
        profileImage
        traits
        onboarded
        minAgePreference
        maxAgePreference
        genderPreference
        createdAt
        updatedAt
        __typename
      }
      content
      sender
      metadata
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      profileId
      profile {
        id
        name
        email
        age
        gender
        bio
        contactInfo
        profileImage
        traits
        onboarded
        minAgePreference
        maxAgePreference
        genderPreference
        createdAt
        updatedAt
        __typename
      }
      content
      sender
      metadata
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProfilesToMatches = /* GraphQL */ `
  mutation CreateProfilesToMatches(
    $input: CreateProfilesToMatchesInput!
    $condition: ModelProfilesToMatchesConditionInput
  ) {
    createProfilesToMatches(input: $input, condition: $condition) {
      id
      profileId
      matchId
      profile {
        id
        name
        email
        age
        gender
        bio
        contactInfo
        profileImage
        traits
        onboarded
        minAgePreference
        maxAgePreference
        genderPreference
        createdAt
        updatedAt
        __typename
      }
      match {
        id
        compatibility
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfilesToMatches = /* GraphQL */ `
  mutation UpdateProfilesToMatches(
    $input: UpdateProfilesToMatchesInput!
    $condition: ModelProfilesToMatchesConditionInput
  ) {
    updateProfilesToMatches(input: $input, condition: $condition) {
      id
      profileId
      matchId
      profile {
        id
        name
        email
        age
        gender
        bio
        contactInfo
        profileImage
        traits
        onboarded
        minAgePreference
        maxAgePreference
        genderPreference
        createdAt
        updatedAt
        __typename
      }
      match {
        id
        compatibility
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfilesToMatches = /* GraphQL */ `
  mutation DeleteProfilesToMatches(
    $input: DeleteProfilesToMatchesInput!
    $condition: ModelProfilesToMatchesConditionInput
  ) {
    deleteProfilesToMatches(input: $input, condition: $condition) {
      id
      profileId
      matchId
      profile {
        id
        name
        email
        age
        gender
        bio
        contactInfo
        profileImage
        traits
        onboarded
        minAgePreference
        maxAgePreference
        genderPreference
        createdAt
        updatedAt
        __typename
      }
      match {
        id
        compatibility
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
