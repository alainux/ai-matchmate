// app/src/screens/ProfileScreen.tsx
import styled from '@emotion/native';
import React, {useState} from 'react';
import {theme} from '../utils/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faImage, faSave} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../components/Button';

const ProfileContainer = styled.ScrollView({
  flex: 1,
  padding: theme.baseUnit * 8,
  backgroundColor: 'white',
});

const Label = styled.Text({
  marginBottom: theme.baseUnit,
  color: theme.colors.textSecondary,
  ...theme.text.variations.base,
});

const Input = styled.TextInput({
  borderWidth: 1,
  borderColor: theme.colors.border,
  borderRadius: theme.baseUnit,
  paddingHorizontal: theme.baseUnit * 2,
  paddingVertical: theme.baseUnit * 2,
  marginBottom: theme.baseUnit * 2,
  ...theme.text.variations.base,
  lineHeight: 18,
});

const ProfileImage = styled.Image({
  width: 120,
  height: 120,
  borderRadius: 60,
  marginBottom: 15,
});

const Row = styled.View({
  flexDirection: 'row',
  paddingVertical: theme.baseUnit * 4,
  justifyContent: 'center',
  paddingHorizontal: 0,
  alignItems: 'center',
});

const Spacer = styled.View({
  height: 100,
});

const BioInput = styled.TextInput({
  borderWidth: 1,
  borderColor: theme.colors.border,
  borderRadius: 5,
  padding: 10,
  marginBottom: 15,
  fontFamily: 'Lexend',
  height: 100,
  textAlignVertical: 'top',
});

const PhotoContainer = styled.View(({theme}) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: theme.baseUnit * 8,
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
        <ProfileImage source={{uri: profileImage}} />

        <Button
          icon={
            <FontAwesomeIcon
              icon={faImage}
              size={20}
              color={theme.colors.primary}
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
          style={{marginLeft: theme.baseUnit}}>
          Save Profile
        </Button>
      </Row>
      <Spacer />
    </ProfileContainer>
  );
};
