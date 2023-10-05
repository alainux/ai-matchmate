/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
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
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        compatibility
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileId
        content
        sender
        metadata
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByProfileIdAndCreatedAt = /* GraphQL */ `
  query MessagesByProfileIdAndCreatedAt(
    $profileId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByProfileIdAndCreatedAt(
      profileId: $profileId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        content
        sender
        metadata
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfilesToMatches = /* GraphQL */ `
  query GetProfilesToMatches($id: ID!) {
    getProfilesToMatches(id: $id) {
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
export const listProfilesToMatches = /* GraphQL */ `
  query ListProfilesToMatches(
    $filter: ModelProfilesToMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfilesToMatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        matchId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profilesToMatchesByProfileId = /* GraphQL */ `
  query ProfilesToMatchesByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfilesToMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilesToMatchesByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        matchId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profilesToMatchesByMatchId = /* GraphQL */ `
  query ProfilesToMatchesByMatchId(
    $matchId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfilesToMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilesToMatchesByMatchId(
      matchId: $matchId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profileId
        matchId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
