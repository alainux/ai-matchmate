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
  matches?: ModelChatMessageConnection | null,
  chatMessages?: ModelChatMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatMessageConnection = {
  __typename: "ModelChatMessageConnection",
  items:  Array<ChatMessage | null >,
  nextToken?: string | null,
};

export type ChatMessage = {
  __typename: "ChatMessage",
  id: string,
  content: string,
  sender: SenderType,
  profileID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum SenderType {
  USER = "USER",
  MATCHMATE_AI = "MATCHMATE_AI",
}


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
  compatibilityScore: number,
  matchTimestamp: string,
  profileID: string,
};

export type ModelMatchConditionInput = {
  compatibilityScore?: ModelFloatInput | null,
  matchTimestamp?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Match = {
  __typename: "Match",
  id: string,
  compatibilityScore: number,
  matchTimestamp: string,
  profileID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMatchInput = {
  id: string,
  compatibilityScore?: number | null,
  matchTimestamp?: string | null,
  profileID?: string | null,
};

export type DeleteMatchInput = {
  id: string,
};

export type CreateChatMessageInput = {
  id?: string | null,
  content: string,
  sender: SenderType,
  profileID: string,
};

export type ModelChatMessageConditionInput = {
  content?: ModelStringInput | null,
  sender?: ModelSenderTypeInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelChatMessageConditionInput | null > | null,
  or?: Array< ModelChatMessageConditionInput | null > | null,
  not?: ModelChatMessageConditionInput | null,
};

export type ModelSenderTypeInput = {
  eq?: SenderType | null,
  ne?: SenderType | null,
};

export type UpdateChatMessageInput = {
  id: string,
  content?: string | null,
  sender?: SenderType | null,
  profileID?: string | null,
};

export type DeleteChatMessageInput = {
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
  compatibilityScore?: ModelFloatInput | null,
  matchTimestamp?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items:  Array<Match | null >,
  nextToken?: string | null,
};

export type ModelChatMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  sender?: ModelSenderTypeInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelChatMessageFilterInput | null > | null,
  or?: Array< ModelChatMessageFilterInput | null > | null,
  not?: ModelChatMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  contactInfo?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
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
  compatibilityScore?: ModelSubscriptionFloatInput | null,
  matchTimestamp?: ModelSubscriptionStringInput | null,
  profileID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMatchFilterInput | null > | null,
  or?: Array< ModelSubscriptionMatchFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionChatMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  sender?: ModelSubscriptionStringInput | null,
  profileID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatMessageFilterInput | null > | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
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
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateChatMessageMutationVariables = {
  input: CreateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type CreateChatMessageMutation = {
  createChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatMessageMutationVariables = {
  input: UpdateChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type UpdateChatMessageMutation = {
  updateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatMessageMutationVariables = {
  input: DeleteChatMessageInput,
  condition?: ModelChatMessageConditionInput | null,
};

export type DeleteChatMessageMutation = {
  deleteChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
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
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelChatMessageConnection",
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
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      compatibilityScore: number,
      matchTimestamp: string,
      profileID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatMessageQueryVariables = {
  id: string,
};

export type GetChatMessageQuery = {
  getChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatMessagesQueryVariables = {
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatMessagesQuery = {
  listChatMessages?:  {
    __typename: "ModelChatMessageConnection",
    items:  Array< {
      __typename: "ChatMessage",
      id: string,
      content: string,
      sender: SenderType,
      profileID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilesByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesByEmailQuery = {
  profilesByEmail?:  {
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
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      chatMessages?:  {
        __typename: "ModelChatMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MatchesByProfileIDQueryVariables = {
  profileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MatchesByProfileIDQuery = {
  matchesByProfileID?:  {
    __typename: "ModelMatchConnection",
    items:  Array< {
      __typename: "Match",
      id: string,
      compatibilityScore: number,
      matchTimestamp: string,
      profileID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatMessagesByProfileIDQueryVariables = {
  profileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatMessagesByProfileIDQuery = {
  chatMessagesByProfileID?:  {
    __typename: "ModelChatMessageConnection",
    items:  Array< {
      __typename: "ChatMessage",
      id: string,
      content: string,
      sender: SenderType,
      profileID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
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
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatMessages?:  {
      __typename: "ModelChatMessageConnection",
      items:  Array< {
        __typename: "ChatMessage",
        id: string,
        content: string,
        sender: SenderType,
        profileID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
  owner?: string | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch?:  {
    __typename: "Match",
    id: string,
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?:  {
    __typename: "Match",
    id: string,
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?:  {
    __typename: "Match",
    id: string,
    compatibilityScore: number,
    matchTimestamp: string,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateChatMessageSubscription = {
  onCreateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChatMessageSubscription = {
  onUpdateChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionChatMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChatMessageSubscription = {
  onDeleteChatMessage?:  {
    __typename: "ChatMessage",
    id: string,
    content: string,
    sender: SenderType,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
