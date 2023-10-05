// app/src/screens/ProfileScreen.tsx
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { faImage, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { SignOutButton } from '../components/SignOutButton';

import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { updateProfile } from '../graphql/mutations';
import {
  Gender,
  GetProfileQuery,
  Profile,
  UpdateProfileMutation,
} from '../types/graphql';

import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { getProfile } from '../graphql/queries';
import { userSelector } from '../utils/aws';
import { ActivityIndicator, Alert, Modal, TextInput, View } from 'react-native';
import { PLACEHOLDER_IMAGE, genders } from '../utils/data';

const ProfileContainer = styled.ScrollView(({ theme }) => ({
  flex: 1,
  ...theme.common.container,
}));

const Label = styled.Text(({ theme }) => ({
  marginBottom: theme.baseUnit,
  color: theme.tokens.text,
  ...theme.text.variations.strong,
}));

const HelpText = styled.Text(({ theme }) => ({
  marginBottom: theme.baseUnit,
  color: theme.tokens.textSubtle,
  ...theme.text.variations.base,
}));

const Input = styled.TextInput(({ theme, editable }) => ({
  ...theme.common.input,

  marginBottom: theme.tokens.spacer,

  ...theme.common.surfaceDimensions,
  ...theme.text.variations.base,
  color:
    editable === false ? theme.tokens.text : theme.tokens.buttonPrimaryText,
}));

const ProfileImage = styled.Image(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: 60,
  marginBottom: theme.tokens.spacer,
}));

const Row = styled.View(({ theme }) => ({
  flexDirection: 'row',
  paddingVertical: theme.tokens.spacer,
  paddingHorizontal: 0,
  gap: theme.tokens.spacer,
}));

const Spacer = styled.View({
  height: 100,
});

const BioInput = styled.TextInput(({ theme }) => ({
  height: 100,
  textAlignVertical: 'top',
  marginBottom: theme.tokens.spacer,
  ...theme.common.input,
  ...theme.text.variations.base,
  ...theme.common.surfaceDimensions,
}));

const PhotoContainer = styled.View(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.tokens.spacer,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.text.variations.header,
  color: theme.tokens.textPrimary,
  width: '100%',
}));

const SpacedBlock = styled.View(({ theme }) => ({
  marginBottom: theme.tokens.spacer,
}));

const TitleRow = styled(SpacedBlock)(({ theme }) => ({
  borderBottomColor: theme.tokens.border,
  borderBottomWidth: 1,
}));

type EditableFields =
  | 'bio'
  | 'name'
  | 'contactInfo'
  | 'age'
  | 'profileImage'
  | 'gender'
  | 'minAgePreference'
  | 'maxAgePreference'
  | 'genderPreference';

type ProfileInfo = Pick<Profile, 'id' | 'email' | EditableFields>;

export const ProfileScreen: React.FC = () => {
  const { user } = useAuthenticator(userSelector);
  const theme = useTheme();

  const [loading, setLoading] = React.useState(false);
  const [profile, setProfile] = React.useState<Partial<ProfileInfo>>();

  const [touched, setTouched] = React.useState(false);
  const modifyProfileField = (
    values: Pick<Partial<ProfileInfo>, EditableFields>,
  ) => {
    setTouched(true);

    setProfile({
      ...((profile as ProfileInfo) ?? {}),
      ...values,
    });
  };

  const fetchProfile = async (id: string) => {
    setLoading(true);
    try {
      const result = await API.graphql<GraphQLQuery<GetProfileQuery>>({
        query: getProfile,
        variables: {
          id: id,
        },
      });

      const profile = result?.data?.getProfile;

      if (!profile) {
        console.log(
          'no profile found for user',
          { id },
          JSON.stringify(result, null, 4),
        );
        return;
      }

      console.log({ id }, JSON.stringify(profile, null, 4));

      const profileData = {
        id: profile.id,
        name: profile.name,
        contactInfo: profile.contactInfo,
        bio: profile.bio,
        email: profile.email,
        profileImage: profile.profileImage,
        age: profile.age,
        gender: profile.gender,
      };

      setProfile(profileData);
      setTouched(false);
    } catch (e) {
      console.log('error fetching user profile', { id }, e);
    } finally {
      setLoading(false);
    }
  };

  const onUpdateProfile = async () => {
    setLoading(true);
    try {
      await API.graphql<GraphQLQuery<UpdateProfileMutation>>({
        query: updateProfile,
        variables: {
          input: profile,
        },
      });
      setTouched(false);
    } catch (e) {
      console.log('error updating user profile', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.attributes?.sub) {
      fetchProfile(user.attributes.sub);
    } else {
      console.log('No sub for user');
    }
  }, [user]);

  if (loading) {
    return (
      <ProfileContainer>
        <ActivityIndicator />
      </ProfileContainer>
    );
  } else if (!profile) {
    return (
      <ProfileContainer>
        <SignOutButton />
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <PhotoContainer>
        <ProfileImage
          source={{ uri: profile.profileImage ?? PLACEHOLDER_IMAGE }}
        />

        <Button
          icon={
            <FontAwesomeIcon
              icon={faImage}
              size={20}
              color={theme.tokens.buttonSecondaryText}
            />
          }
          secondary
          onPress={() => {
            // TODO: Handle profile image update logic here
          }}>
          Update Image
        </Button>
      </PhotoContainer>

      <TitleRow>
        <Title>Basic</Title>
      </TitleRow>

      <SpacedBlock>
        <Label>Name</Label>
        <HelpText>This will be shown to matches.</HelpText>
        <Input
          value={profile.name}
          onChangeText={value =>
            modifyProfileField({
              ...profile,
              name: value,
            })
          }
          placeholder="Enter your name"
        />

        <Row>
          <View style={{ flex: 1 }}>
            <Label>Age</Label>
            <Input
              inputMode="numeric"
              keyboardType="number-pad"
              maxLength={10}
              value={String(profile.age ?? '')}
              onChangeText={value =>
                modifyProfileField({
                  ...profile,
                  age: Number(value),
                })
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <Label>Gender</Label>
            <Button
              secondary
              onPress={() => {
                Alert.alert(
                  'Select one',
                  'Gender',
                  [
                    {
                      text: genders[Gender.MALE],
                      onPress: () =>
                        modifyProfileField({ ...profile, gender: Gender.MALE }),
                    },
                    {
                      text: genders[Gender.FEMALE],
                      onPress: () =>
                        modifyProfileField({
                          ...profile,
                          gender: Gender.FEMALE,
                        }),
                    },
                    {
                      text: genders[Gender.OTHER],
                      onPress: () =>
                        modifyProfileField({
                          ...profile,
                          gender: Gender.OTHER,
                        }),
                    },
                  ],
                  {
                    userInterfaceStyle: 'dark',
                  },
                );
              }}>
              {profile.gender ? genders[profile.gender] : 'Select'}
            </Button>
          </View>
        </Row>

        <Label>Email</Label>
        <Input
          value={profile.email}
          editable={false}
          // onChangeText={setEmail}
          placeholder="Enter your email"
        />
      </SpacedBlock>

      <TitleRow>
        <Title>Profile</Title>
      </TitleRow>

      <SpacedBlock>
        <Label>Bio</Label>
        <HelpText>This will be shown to matches.</HelpText>
        <BioInput
          value={profile.bio ?? ''}
          onChangeText={value =>
            modifyProfileField({
              ...profile,
              bio: value,
            })
          }
          placeholder="Tell us a bit about yourself"
          multiline
          numberOfLines={4}
        />

        <Label>Contact Info</Label>
        <HelpText>This how matches can contact you.</HelpText>
        <Input
          value={profile.contactInfo ?? ''}
          onChangeText={value =>
            modifyProfileField({
              ...profile,
              contactInfo: value,
            })
          }
          placeholder="@username"
        />
      </SpacedBlock>
      <TitleRow>
        <Title>Preferences</Title>
        <HelpText>What you are looking for in a match.</HelpText>
      </TitleRow>
      <SpacedBlock>
        <Row>
          <View style={{ flex: 1 }}>
            <Label>Min Age</Label>
            <Input
              inputMode="numeric"
              keyboardType="number-pad"
              maxLength={10}
              value={String(profile.minAgePreference ?? '')}
              onChangeText={value =>
                modifyProfileField({
                  ...profile,
                  minAgePreference: Number(value),
                })
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <Label>Max Age</Label>
            <Input
              inputMode="numeric"
              keyboardType="number-pad"
              maxLength={10}
              value={String(profile.maxAgePreference ?? '')}
              onChangeText={value =>
                modifyProfileField({
                  ...profile,
                  maxAgePreference: Number(value),
                })
              }
            />
          </View>
          <View style={{ flex: 1 }}>
            <Label>Gender</Label>
            <Button
              secondary
              onPress={() => {
                Alert.alert(
                  'Select one',
                  'Preferred gender',
                  [
                    {
                      text: genders[Gender.MALE],
                      onPress: () =>
                        modifyProfileField({
                          ...profile,
                          genderPreference: Gender.MALE,
                        }),
                    },
                    {
                      text: genders[Gender.FEMALE],
                      onPress: () =>
                        modifyProfileField({
                          ...profile,
                          genderPreference: Gender.FEMALE,
                        }),
                    },
                    {
                      text: genders[Gender.OTHER],
                      onPress: () =>
                        modifyProfileField({
                          ...profile,
                          genderPreference: Gender.OTHER,
                        }),
                    },
                  ],
                  {
                    userInterfaceStyle: 'dark',
                  },
                );
              }}>
              {profile.genderPreference
                ? genders[profile.genderPreference]
                : 'Select'}
            </Button>
          </View>
        </Row>
      </SpacedBlock>
      <Row>
        <SignOutButton style={{ flex: 1 }} />
        <Button
          onPress={onUpdateProfile}
          icon={<FontAwesomeIcon icon={faSave} size={20} color="white" />}
          disabled={!touched}
          style={{ flex: 1 }}>
          Save Profile
        </Button>
      </Row>

      <Spacer />
    </ProfileContainer>
  );
};
