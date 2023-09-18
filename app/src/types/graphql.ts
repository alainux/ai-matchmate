/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  bio?: string | null,
  contactInfo?: string | null,
  profileImage?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name: string,
  email: string,
  bio?: string | null,
  contactInfo?: string | null,
  profileImage?: string | null,
  matches?: ModelProfilesToMatchesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProfilesToMatchesConnection = {
  __typename: "ModelProfilesToMatchesConnection",
  items:  Array<ProfilesToMatches | null >,
  nextToken?: string | null,
};

export type ProfilesToMatches = {
  __typename: "ProfilesToMatches",
  id: string,
  profileId: string,
  matchId: string,
  profile: Profile,
  match: Match,
  createdAt: string,
  updatedAt: string,
};

export type Match = {
  __typename: "Match",
  id: string,
  profiles?: ModelProfilesToMatchesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  bio?: string | null,
  contactInfo?: string | null,
  profileImage?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateMatchInput = {
  id?: string | null,
};

export type ModelMatchConditionInput = {
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type UpdateMatchInput = {
  id: string,
};

export type DeleteMatchInput = {
  id: string,
};

export type CreateProfilesToMatchesInput = {
  id?: string | null,
  profileId: string,
  matchId: string,
};

export type ModelProfilesToMatchesConditionInput = {
  profileId?: ModelIDInput | null,
  matchId?: ModelIDInput | null,
  and?: Array< ModelProfilesToMatchesConditionInput | null > | null,
  or?: Array< ModelProfilesToMatchesConditionInput | null > | null,
  not?: ModelProfilesToMatchesConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProfilesToMatchesInput = {
  id: string,
  profileId?: string | null,
  matchId?: string | null,
};

export type DeleteProfilesToMatchesInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items:  Array<Match | null >,
  nextToken?: string | null,
};

export type ModelProfilesToMatchesFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  matchId?: ModelIDInput | null,
  and?: Array< ModelProfilesToMatchesFilterInput | null > | null,
  or?: Array< ModelProfilesToMatchesFilterInput | null > | null,
  not?: ModelProfilesToMatchesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionProfileFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  contactInfo?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMatchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMatchFilterInput | null > | null,
  or?: Array< ModelSubscriptionMatchFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProfilesToMatchesFilterInput = {
  profileId?: ModelSubscriptionIDInput | null,
  matchId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProfilesToMatchesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfilesToMatchesFilterInput | null > | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type CreateMatchMutation = {
  createMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMatchMutationVariables = {
  input: UpdateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type UpdateMatchMutation = {
  updateMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMatchMutationVariables = {
  input: DeleteMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type DeleteMatchMutation = {
  deleteMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfilesToMatchesMutationVariables = {
  input: CreateProfilesToMatchesInput,
  condition?: ModelProfilesToMatchesConditionInput | null,
};

export type CreateProfilesToMatchesMutation = {
  createProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfilesToMatchesMutationVariables = {
  input: UpdateProfilesToMatchesInput,
  condition?: ModelProfilesToMatchesConditionInput | null,
};

export type UpdateProfilesToMatchesMutation = {
  updateProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfilesToMatchesMutationVariables = {
  input: DeleteProfilesToMatchesInput,
  condition?: ModelProfilesToMatchesConditionInput | null,
};

export type DeleteProfilesToMatchesMutation = {
  deleteProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMatchQueryVariables = {
  id: string,
};

export type GetMatchQuery = {
  getMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMatchesQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchesQuery = {
  listMatches?:  {
    __typename: "ModelMatchConnection",
    items:  Array< {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfilesToMatchesQueryVariables = {
  id: string,
};

export type GetProfilesToMatchesQuery = {
  getProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesToMatchesQueryVariables = {
  filter?: ModelProfilesToMatchesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesToMatchesQuery = {
  listProfilesToMatches?:  {
    __typename: "ModelProfilesToMatchesConnection",
    items:  Array< {
      __typename: "ProfilesToMatches",
      id: string,
      profileId: string,
      matchId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        name: string,
        email: string,
        bio?: string | null,
        contactInfo?: string | null,
        profileImage?: string | null,
        matches?:  {
          __typename: "ModelProfilesToMatchesConnection",
          items:  Array< {
            __typename: "ProfilesToMatches",
            id: string,
            profileId: string,
            matchId: string,
            profile:  {
              __typename: "Profile",
              id: string,
              name: string,
              email: string,
              bio?: string | null,
              contactInfo?: string | null,
              profileImage?: string | null,
              createdAt: string,
              updatedAt: string,
            },
            match:  {
              __typename: "Match",
              id: string,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      match:  {
        __typename: "Match",
        id: string,
        profiles?:  {
          __typename: "ModelProfilesToMatchesConnection",
          items:  Array< {
            __typename: "ProfilesToMatches",
            id: string,
            profileId: string,
            matchId: string,
            profile:  {
              __typename: "Profile",
              id: string,
              name: string,
              email: string,
              bio?: string | null,
              contactInfo?: string | null,
              profileImage?: string | null,
              createdAt: string,
              updatedAt: string,
            },
            match:  {
              __typename: "Match",
              id: string,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilesToMatchesByProfileIdQueryVariables = {
  profileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfilesToMatchesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesToMatchesByProfileIdQuery = {
  profilesToMatchesByProfileId?:  {
    __typename: "ModelProfilesToMatchesConnection",
    items:  Array< {
      __typename: "ProfilesToMatches",
      id: string,
      profileId: string,
      matchId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        name: string,
        email: string,
        bio?: string | null,
        contactInfo?: string | null,
        profileImage?: string | null,
        matches?:  {
          __typename: "ModelProfilesToMatchesConnection",
          items:  Array< {
            __typename: "ProfilesToMatches",
            id: string,
            profileId: string,
            matchId: string,
            profile:  {
              __typename: "Profile",
              id: string,
              name: string,
              email: string,
              bio?: string | null,
              contactInfo?: string | null,
              profileImage?: string | null,
              createdAt: string,
              updatedAt: string,
            },
            match:  {
              __typename: "Match",
              id: string,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      match:  {
        __typename: "Match",
        id: string,
        profiles?:  {
          __typename: "ModelProfilesToMatchesConnection",
          items:  Array< {
            __typename: "ProfilesToMatches",
            id: string,
            profileId: string,
            matchId: string,
            profile:  {
              __typename: "Profile",
              id: string,
              name: string,
              email: string,
              bio?: string | null,
              contactInfo?: string | null,
              profileImage?: string | null,
              createdAt: string,
              updatedAt: string,
            },
            match:  {
              __typename: "Match",
              id: string,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilesToMatchesByMatchIdQueryVariables = {
  matchId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfilesToMatchesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesToMatchesByMatchIdQuery = {
  profilesToMatchesByMatchId?:  {
    __typename: "ModelProfilesToMatchesConnection",
    items:  Array< {
      __typename: "ProfilesToMatches",
      id: string,
      profileId: string,
      matchId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        name: string,
        email: string,
        bio?: string | null,
        contactInfo?: string | null,
        profileImage?: string | null,
        matches?:  {
          __typename: "ModelProfilesToMatchesConnection",
          items:  Array< {
            __typename: "ProfilesToMatches",
            id: string,
            profileId: string,
            matchId: string,
            profile:  {
              __typename: "Profile",
              id: string,
              name: string,
              email: string,
              bio?: string | null,
              contactInfo?: string | null,
              profileImage?: string | null,
              createdAt: string,
              updatedAt: string,
            },
            match:  {
              __typename: "Match",
              id: string,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      match:  {
        __typename: "Match",
        id: string,
        profiles?:  {
          __typename: "ModelProfilesToMatchesConnection",
          items:  Array< {
            __typename: "ProfilesToMatches",
            id: string,
            profileId: string,
            matchId: string,
            profile:  {
              __typename: "Profile",
              id: string,
              name: string,
              email: string,
              bio?: string | null,
              contactInfo?: string | null,
              profileImage?: string | null,
              createdAt: string,
              updatedAt: string,
            },
            match:  {
              __typename: "Match",
              id: string,
              createdAt: string,
              updatedAt: string,
            },
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  id?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  id?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  id?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    email: string,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?:  {
    __typename: "Match",
    id: string,
    profiles?:  {
      __typename: "ModelProfilesToMatchesConnection",
      items:  Array< {
        __typename: "ProfilesToMatches",
        id: string,
        profileId: string,
        matchId: string,
        profile:  {
          __typename: "Profile",
          id: string,
          name: string,
          email: string,
          bio?: string | null,
          contactInfo?: string | null,
          profileImage?: string | null,
          matches?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        match:  {
          __typename: "Match",
          id: string,
          profiles?:  {
            __typename: "ModelProfilesToMatchesConnection",
            items:  Array< {
              __typename: "ProfilesToMatches",
              id: string,
              profileId: string,
              matchId: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfilesToMatchesSubscriptionVariables = {
  filter?: ModelSubscriptionProfilesToMatchesFilterInput | null,
  id?: string | null,
};

export type OnCreateProfilesToMatchesSubscription = {
  onCreateProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfilesToMatchesSubscriptionVariables = {
  filter?: ModelSubscriptionProfilesToMatchesFilterInput | null,
  id?: string | null,
};

export type OnUpdateProfilesToMatchesSubscription = {
  onUpdateProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfilesToMatchesSubscriptionVariables = {
  filter?: ModelSubscriptionProfilesToMatchesFilterInput | null,
  id?: string | null,
};

export type OnDeleteProfilesToMatchesSubscription = {
  onDeleteProfilesToMatches?:  {
    __typename: "ProfilesToMatches",
    id: string,
    profileId: string,
    matchId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      matches?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      profiles?:  {
        __typename: "ModelProfilesToMatchesConnection",
        items:  Array< {
          __typename: "ProfilesToMatches",
          id: string,
          profileId: string,
          matchId: string,
          profile:  {
            __typename: "Profile",
            id: string,
            name: string,
            email: string,
            bio?: string | null,
            contactInfo?: string | null,
            profileImage?: string | null,
            matches?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          match:  {
            __typename: "Match",
            id: string,
            profiles?:  {
              __typename: "ModelProfilesToMatchesConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
