/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $id: String
  ) {
    onCreateProfile(filter: $filter, id: $id) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $id: String
  ) {
    onUpdateProfile(filter: $filter, id: $id) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $id: String
  ) {
    onDeleteProfile(filter: $filter, id: $id) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onCreateMatch(filter: $filter) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onUpdateMatch(filter: $filter) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
    onDeleteMatch(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $profileId: String
  ) {
    onCreateMessage(filter: $filter, profileId: $profileId) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $profileId: String
  ) {
    onUpdateMessage(filter: $filter, profileId: $profileId) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $profileId: String
  ) {
    onDeleteMessage(filter: $filter, profileId: $profileId) {
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
export const onCreateProfilesToMatches = /* GraphQL */ `
  subscription OnCreateProfilesToMatches(
    $filter: ModelSubscriptionProfilesToMatchesFilterInput
    $id: String
  ) {
    onCreateProfilesToMatches(filter: $filter, id: $id) {
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
export const onUpdateProfilesToMatches = /* GraphQL */ `
  subscription OnUpdateProfilesToMatches(
    $filter: ModelSubscriptionProfilesToMatchesFilterInput
    $id: String
  ) {
    onUpdateProfilesToMatches(filter: $filter, id: $id) {
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
export const onDeleteProfilesToMatches = /* GraphQL */ `
  subscription OnDeleteProfilesToMatches(
    $filter: ModelSubscriptionProfilesToMatchesFilterInput
    $id: String
  ) {
    onDeleteProfilesToMatches(filter: $filter, id: $id) {
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
