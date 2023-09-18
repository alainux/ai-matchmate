// app/src/screens/ProfileScreen.tsx
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { faImage, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { SignOutButton } from '../components/SignOutButton';

import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { updateProfile } from '../graphql/mutations';
import {
  GetProfileQuery,
  Profile,
  UpdateProfileMutation,
} from '../types/graphql';

import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { getProfile } from '../graphql/queries';
import { userSelector } from '../utils/aws';
import { ActivityIndicator } from 'react-native';
import { PLACEHOLDER_IMAGE } from '../utils/data';

const ProfileContainer = styled.ScrollView(({ theme }) => ({
  flex: 1,
  ...theme.common.container,
}));

const Label = styled.Text(({ theme }) => ({
  marginBottom: theme.baseUnit,
  color: theme.tokens.text,
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
  justifyContent: 'center',
  paddingHorizontal: 0,
  alignItems: 'center',
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



type ProfileInfo = Pick<
  Profile,
  'id' | 'name' | 'contactInfo' | 'bio' | 'email' | 'profileImage'
>;

export const ProfileScreen: React.FC = () => {
  const { user } = useAuthenticator(userSelector);
  const theme = useTheme();

  const [loading, setLoading] = React.useState(false);
  const [profile, setProfile] = React.useState<Partial<ProfileInfo>>();

  const [touched, setTouched] = React.useState(false);
  const modifyProfileField = (
    values: Pick<Partial<ProfileInfo>, 'bio' | 'name' | 'contactInfo'>,
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

      <Label>Name</Label>
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

      <Label>Email</Label>
      <Input
        value={profile.email}
        editable={false}
        // onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <Label>Bio</Label>
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
      <Input
        value={profile.contactInfo ?? ''}
        onChangeText={value =>
          modifyProfileField({
            ...profile,
            contactInfo: value,
          })
        }
        placeholder="Enter your preferred contact method"
      />

      <Row>
        <Button
          onPress={onUpdateProfile}
          icon={<FontAwesomeIcon icon={faSave} size={20} color="white" />}
          disabled={!touched}
          style={{ marginRight: theme.tokens.spacer }}>
          Save Profile
        </Button>
        <SignOutButton />
      </Row>

      <Spacer />
    </ProfileContainer>
  );
};
