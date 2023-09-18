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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
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
