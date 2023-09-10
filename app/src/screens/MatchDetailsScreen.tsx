// app/src/screens/MatchDetailsScreen.tsx
import React from 'react';

import styled from '@emotion/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../Layout/RootStack';

type MatchDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MatchDetails'
>;

type Props = {
  route: MatchDetailsScreenRouteProp;
};

const DetailsContainer = styled.ScrollView(({ theme }) => ({
  flex: 1,
  ...theme.common.container,
}));

const MatchLargeImage = styled.Image(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: 75,
  alignSelf: 'center',
  marginBottom: theme.tokens.spacer,
}));

const MatchLargeName = styled.Text(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.tokens.spacer,
  color: theme.tokens.textPrimary,
  ...theme.text.variations.strongLarge,
}));

const MatchBio = styled.Text(({ theme }) => ({
  color: theme.tokens.text,
  ...theme.text.variations.base,
  marginBottom: theme.tokens.spacer,
}));

const ContactInfoLabel = styled.Text(({ theme }) => ({
  color: theme.tokens.text,
  ...theme.text.variations.strong,
  marginBottom: theme.tokens.spacer,
}));

const ContactInfo = styled.Text(({ theme }) => ({
  color: theme.tokens.text,
  ...theme.text.variations.base,
  marginBottom: theme.tokens.spacer,
}));

export const MatchDetailsScreen: React.FC<Props> = ({ route }) => {
  const { match } = route.params;

  return (
    <DetailsContainer>
      <MatchLargeImage source={{ uri: match.image }} />
      <MatchLargeName>{match.name}</MatchLargeName>
      <MatchBio>{match.bio}</MatchBio>
      <ContactInfoLabel>Contact:</ContactInfoLabel>
      <ContactInfo>{match.contactInfo}</ContactInfo>
    </DetailsContainer>
  );
};
