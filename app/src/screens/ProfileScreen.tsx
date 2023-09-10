// app/src/screens/ProfileScreen.tsx
import styled from '@emotion/native';
import React, { useState } from 'react';
import { theme } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage, faSave } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/Button';

const ProfileContainer = styled.ScrollView({
  flex: 1,
  ...theme.common.container,
});

const Label = styled.Text({
  marginBottom: theme.baseUnit,
  color: theme.tokens.text,
  ...theme.text.variations.base,
});

const Input = styled.TextInput({
  ...theme.common.input,

  marginBottom: theme.tokens.spacer,

  ...theme.common.surfaceDimensions,
  ...theme.text.variations.base,
});

const ProfileImage = styled.Image(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: 60,
  marginBottom: theme.tokens.spacer,
}));

const Row = styled.View({
  flexDirection: 'row',
  paddingVertical: theme.tokens.spacer,
  justifyContent: 'center',
  paddingHorizontal: 0,
  alignItems: 'center',
});

const Spacer = styled.View({
  height: 100,
});

const BioInput = styled.TextInput({
  height: 100,
  textAlignVertical: 'top',
  marginBottom: theme.tokens.spacer,
  ...theme.common.input,
  ...theme.text.variations.base,
  ...theme.common.surfaceDimensions,
});

const PhotoContainer = styled.View(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.tokens.spacer,
}));

const PLACEHOLDER_IMAGE = 'https://picsum.photos/id/203/800/500.jpg';

export const ProfileScreen: React.FC = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [contactInfo, setContactInfo] = useState('Telegram: @john_doe');
  const [profileImage] = useState(PLACEHOLDER_IMAGE);
  const [bio, setBio] = useState(
    'Tech enthusiast, avid traveler, and AI aficionado. Love hiking and always up for a good chat about the latest in tech.',
  );

  return (
    <ProfileContainer>
      <PhotoContainer>
        <ProfileImage source={{ uri: profileImage }} />

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
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Label>Email</Label>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <Label>Bio</Label>
      <BioInput
        value={bio}
        onChangeText={setBio}
        placeholder="Tell us a bit about yourself"
        multiline
        numberOfLines={4}
      />

      <Label>Contact Info</Label>
      <Input
        value={contactInfo}
        onChangeText={setContactInfo}
        placeholder="Enter your preferred contact method"
      />

      <Row>
        <Button
          onPress={() => {
            // TODO: Handle save profile logic here
          }}
          icon={<FontAwesomeIcon icon={faSave} size={20} color="white" />}
          style={{ marginLeft: theme.baseUnit }}>
          Save Profile
        </Button>
      </Row>
      <Spacer />
    </ProfileContainer>
  );
};
