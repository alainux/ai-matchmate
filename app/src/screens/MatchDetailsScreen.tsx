// app/src/screens/MatchDetailsScreen.tsx
import React from 'react';

import styled from '@emotion/native';
import {theme} from '../utils/theme';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../Layout/RootStack';

type MatchDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MatchDetails'
>;

type Props = {
  route: MatchDetailsScreenRouteProp;
};

const DetailsContainer = styled.View({
  flex: 1,
  padding: theme.baseUnit * 8,
  backgroundColor: 'white',
});

const MatchLargeImage = styled.Image({
  width: 150,
  height: 150,
  borderRadius: 75,
  alignSelf: 'center',
  marginBottom: theme.baseUnit * 4,
});

const MatchLargeName = styled.Text({
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.baseUnit * 2,
  color: theme.colors.textPrimary,
  fontFamily: 'Lexend',
});

const MatchBio = styled.Text({
  fontSize: 16,
  color: theme.colors.textSecondary,
  fontFamily: 'Lexend',
  marginBottom: theme.baseUnit * 4,
});

const ContactInfoLabel = styled.Text({
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.colors.textPrimary,
  fontFamily: 'Lexend',
  marginBottom: theme.baseUnit,
});

const ContactInfo = styled.Text({
  fontSize: 16,
  color: theme.colors.textSecondary,
  fontFamily: 'Lexend',
  marginBottom: theme.baseUnit * 4,
});

export const MatchDetailsScreen: React.FC<Props> = ({route}) => {
  const {match} = route.params;

  return (
    <DetailsContainer>
      <MatchLargeImage source={{uri: match.image}} />
      <MatchLargeName>{match.name}</MatchLargeName>
      <MatchBio>{match.bio}</MatchBio>
      <ContactInfoLabel>Contact:</ContactInfoLabel>
      <ContactInfo>{match.contactInfo}</ContactInfo>
    </DetailsContainer>
  );
};
