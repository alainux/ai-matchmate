/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type LambdaResponse = {
  __typename: "LambdaResponse",
  statusCode?: number | null,
  body?: string | null,
  error?: string | null,
};

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  age?: number | null,
  gender?: Gender | null,
  bio?: string | null,
  contactInfo?: string | null,
  profileImage?: string | null,
  traits?: string | null,
  onboarded?: boolean | null,
  minAgePreference?: number | null,
  maxAgePreference?: number | null,
  genderPreference?: Gender | null,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  bio?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  traits?: ModelStringInput | null,
  onboarded?: ModelBooleanInput | null,
  minAgePreference?: ModelIntInput | null,
  maxAgePreference?: ModelIntInput | null,
  genderPreference?: ModelGenderInput | null,
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

export type ModelIntInput = {
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

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name: string,
  email: string,
  age?: number | null,
  gender?: Gender | null,
  bio?: string | null,
  contactInfo?: string | null,
  profileImage?: string | null,
  matches?: ModelProfilesToMatchesConnection | null,
  messages?: ModelMessageConnection | null,
  traits?: string | null,
  onboarded?: boolean | null,
  minAgePreference?: number | null,
  maxAgePreference?: number | null,
  genderPreference?: Gender | null,
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
  compatibility?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  profileId: string,
  profile?: Profile | null,
  content: string,
  sender: SenderType,
  metadata?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum SenderType {
  USER = "USER",
  AI = "AI",
}


export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  age?: number | null,
  gender?: Gender | null,
  bio?: string | null,
  contactInfo?: string | null,
  profileImage?: string | null,
  traits?: string | null,
  onboarded?: boolean | null,
  minAgePreference?: number | null,
  maxAgePreference?: number | null,
  genderPreference?: Gender | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateMatchInput = {
  id?: string | null,
  compatibility?: number | null,
};

export type ModelMatchConditionInput = {
  compatibility?: ModelFloatInput | null,
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

export type UpdateMatchInput = {
  id: string,
  compatibility?: number | null,
};

export type DeleteMatchInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  profileId: string,
  content: string,
  sender: SenderType,
  metadata?: string | null,
  createdAt?: string | null,
};

export type ModelMessageConditionInput = {
  profileId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  sender?: ModelSenderTypeInput | null,
  metadata?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
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

export type ModelSenderTypeInput = {
  eq?: SenderType | null,
  ne?: SenderType | null,
};

export type UpdateMessageInput = {
  id: string,
  profileId?: string | null,
  content?: string | null,
  sender?: SenderType | null,
  metadata?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
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
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  bio?: ModelStringInput | null,
  contactInfo?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  traits?: ModelStringInput | null,
  onboarded?: ModelBooleanInput | null,
  minAgePreference?: ModelIntInput | null,
  maxAgePreference?: ModelIntInput | null,
  genderPreference?: ModelGenderInput | null,
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
  compatibility?: ModelFloatInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items:  Array<Match | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  sender?: ModelSenderTypeInput | null,
  metadata?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfilesToMatchesFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  matchId?: ModelIDInput | null,
  and?: Array< ModelProfilesToMatchesFilterInput | null > | null,
  or?: Array< ModelProfilesToMatchesFilterInput | null > | null,
  not?: ModelProfilesToMatchesFilterInput | null,
};

export type ModelSubscriptionProfileFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  contactInfo?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  traits?: ModelSubscriptionStringInput | null,
  onboarded?: ModelSubscriptionBooleanInput | null,
  minAgePreference?: ModelSubscriptionIntInput | null,
  maxAgePreference?: ModelSubscriptionIntInput | null,
  genderPreference?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionMatchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  compatibility?: ModelSubscriptionFloatInput | null,
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

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  sender?: ModelSubscriptionStringInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionProfilesToMatchesFilterInput = {
  profileId?: ModelSubscriptionIDInput | null,
  matchId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProfilesToMatchesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfilesToMatchesFilterInput | null > | null,
};

export type SendChatMessageMutationVariables = {
  userId: string,
  currentProfile: string,
  message: string,
};

export type SendChatMessageMutation = {
  sendChatMessage?:  {
    __typename: "LambdaResponse",
    statusCode?: number | null,
    body?: string | null,
    error?: string | null,
  } | null,
};

export type FindMatchesMutationVariables = {
  userId: string,
};

export type FindMatchesMutation = {
  findMatches?:  {
    __typename: "LambdaResponse",
    statusCode?: number | null,
    body?: string | null,
    error?: string | null,
  } | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
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
      compatibility?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      profileId: string,
      content: string,
      sender: SenderType,
      metadata?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByProfileIdAndCreatedAtQueryVariables = {
  profileId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByProfileIdAndCreatedAtQuery = {
  messagesByProfileIdAndCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      profileId: string,
      content: string,
      sender: SenderType,
      metadata?: string | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
    age?: number | null,
    gender?: Gender | null,
    bio?: string | null,
    contactInfo?: string | null,
    profileImage?: string | null,
    matches?:  {
      __typename: "ModelProfilesToMatchesConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    traits?: string | null,
    onboarded?: boolean | null,
    minAgePreference?: number | null,
    maxAgePreference?: number | null,
    genderPreference?: Gender | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
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
      nextToken?: string | null,
    } | null,
    compatibility?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  profileId?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  profileId?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  profileId?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      email: string,
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    sender: SenderType,
    metadata?: string | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
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
      age?: number | null,
      gender?: Gender | null,
      bio?: string | null,
      contactInfo?: string | null,
      profileImage?: string | null,
      traits?: string | null,
      onboarded?: boolean | null,
      minAgePreference?: number | null,
      maxAgePreference?: number | null,
      genderPreference?: Gender | null,
      createdAt: string,
      updatedAt: string,
    },
    match:  {
      __typename: "Match",
      id: string,
      compatibility?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
