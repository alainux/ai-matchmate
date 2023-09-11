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
    Profile,
    ProfilesByEmailQuery,
    UpdateProfileMutation,
} from '../types/graphql';

import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { profilesByEmail } from '../graphql/queries';
import { userSelector } from '../utils/aws';

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

const PLACEHOLDER_IMAGE = 'https://picsum.photos/id/203/800/500.jpg';

type ProfileInfo = Pick<
  Profile,
  'id' | 'name' | 'contactInfo' | 'bio' | 'email' | 'profileImage'
>;

export const ProfileScreen: React.FC = () => {
  const { user } = useAuthenticator(userSelector);
  const theme = useTheme();

  const [profile, setProfile] = React.useState<ProfileInfo>();

  const fetchProfile = async (email: string) => {
    try {
      const result = await API.graphql<GraphQLQuery<ProfilesByEmailQuery>>({
        query: profilesByEmail,
        variables: {
          email: email,
        },
      });

      const profile =
        (result?.data?.profilesByEmail?.items?.[0] as Profile) ?? null;

      setProfile({
        id: profile.id,
        name: profile.name,
        contactInfo: profile.contactInfo,
        bio: profile.bio,
        email: profile.email,
        profileImage: profile.profileImage,
      });
    } catch (e) {
      console.log('error fetching user profile', e);
    }
  };

  const onUpdateProfile = async () => {
    try {
      const result = await API.graphql<GraphQLQuery<UpdateProfileMutation>>({
        query: updateProfile,
        variables: {
          input: profile,
        },
      });
    } catch (e) {
      console.log('error updating user profile', e);
    }
  };

  useEffect(() => {
    if (user?.attributes?.email) {
      fetchProfile(user.attributes.email);
    }
  }, [user]);

  if (!profile) {
    return <ProfileContainer>{/* Loading */}</ProfileContainer>;
  }

  return (
    <ProfileContainer>
      <PhotoContainer>
        <ProfileImage
          source={{ uri: profile?.profileImage ?? PLACEHOLDER_IMAGE }}
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
          setProfile({
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
          setProfile({
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
          setProfile({
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
          style={{ marginRight: theme.tokens.spacer }}>
          Save Profile
        </Button>
        <SignOutButton />
      </Row>

      <Spacer />
    </ProfileContainer>
  );
};
