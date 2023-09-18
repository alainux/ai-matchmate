/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      name
      email
      bio
      contactInfo
      profileImage
      matches {
        items {
          id
          profileId
          matchId
          profile {
            id
            name
            email
            bio
            contactInfo
            profileImage
            matches {
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
            createdAt
            updatedAt
            __typename
          }
          match {
            id
            profiles {
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
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
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
        bio
        contactInfo
        profileImage
        matches {
          items {
            id
            profileId
            matchId
            profile {
              id
              name
              email
              bio
              contactInfo
              profileImage
              matches {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            match {
              id
              profiles {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        items {
          id
          profileId
          matchId
          profile {
            id
            name
            email
            bio
            contactInfo
            profileImage
            matches {
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
            createdAt
            updatedAt
            __typename
          }
          match {
            id
            profiles {
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
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
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
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profiles {
          items {
            id
            profileId
            matchId
            profile {
              id
              name
              email
              bio
              contactInfo
              profileImage
              matches {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            match {
              id
              profiles {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        bio
        contactInfo
        profileImage
        matches {
          items {
            id
            profileId
            matchId
            profile {
              id
              name
              email
              bio
              contactInfo
              profileImage
              matches {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            match {
              id
              profiles {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      match {
        id
        profiles {
          items {
            id
            profileId
            matchId
            profile {
              id
              name
              email
              bio
              contactInfo
              profileImage
              matches {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            match {
              id
              profiles {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        profile {
          id
          name
          email
          bio
          contactInfo
          profileImage
          matches {
            items {
              id
              profileId
              matchId
              profile {
                id
                name
                email
                bio
                contactInfo
                profileImage
                createdAt
                updatedAt
                __typename
              }
              match {
                id
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        match {
          id
          profiles {
            items {
              id
              profileId
              matchId
              profile {
                id
                name
                email
                bio
                contactInfo
                profileImage
                createdAt
                updatedAt
                __typename
              }
              match {
                id
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
        profile {
          id
          name
          email
          bio
          contactInfo
          profileImage
          matches {
            items {
              id
              profileId
              matchId
              profile {
                id
                name
                email
                bio
                contactInfo
                profileImage
                createdAt
                updatedAt
                __typename
              }
              match {
                id
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        match {
          id
          profiles {
            items {
              id
              profileId
              matchId
              profile {
                id
                name
                email
                bio
                contactInfo
                profileImage
                createdAt
                updatedAt
                __typename
              }
              match {
                id
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
        profile {
          id
          name
          email
          bio
          contactInfo
          profileImage
          matches {
            items {
              id
              profileId
              matchId
              profile {
                id
                name
                email
                bio
                contactInfo
                profileImage
                createdAt
                updatedAt
                __typename
              }
              match {
                id
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        match {
          id
          profiles {
            items {
              id
              profileId
              matchId
              profile {
                id
                name
                email
                bio
                contactInfo
                profileImage
                createdAt
                updatedAt
                __typename
              }
              match {
                id
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
