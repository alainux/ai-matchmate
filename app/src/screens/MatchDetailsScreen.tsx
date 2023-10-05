// app/src/screens/MatchDetailsScreen.tsx
import React from 'react';

import styled from '@emotion/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../Layout/RootStack';
import { PLACEHOLDER_IMAGE } from '../utils/data';
import { Button } from '../components/Button';
import { View } from 'react-native';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { useNavigation } from '../hooks/useNavigation';

type MatchDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MatchDetails'
>;

type Props = {
  route: MatchDetailsScreenRouteProp;
};

const DetailsContainer = styled.ScrollView(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
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

const onUpdateProfile = async ({
  matchId,
  p2m1Id,
  p2m2Id,
}: Record<string, string>) => {
  try {
    await API.graphql<GraphQLQuery<any>>({
      query: `
      mutation Delete($matchId: ID!, $p2m1Id: ID!, $p2m2Id: ID!) {
        d1: deleteProfilesToMatches(input: {id: $matchId}) {
          id
        }
        d2: deleteProfilesToMatches(input: {id: $p2m1Id}) {
          id
        }
        d3: deleteMatch(input: {id: $p2m2Id}) {
          id
        }
      }
      
      `,
      variables: {
        matchId,
        p2m1Id,
        p2m2Id,
      },
    });
  } catch (e) {
    console.log('error updating user profile', e);
  } finally {
  }
};

export const MatchDetailsScreen: React.FC<Props> = ({ route }) => {
  const { match, data } = route.params;
  const navigation = useNavigation();

  return (
    <DetailsContainer>
      <View style={{ flex: 1 }}>
        <MatchLargeImage
          source={{ uri: match.profileImage ?? PLACEHOLDER_IMAGE }}
        />
        <MatchLargeName>{match.name}</MatchLargeName>
        <MatchBio>{match.bio}</MatchBio>
        <ContactInfoLabel>Contact:</ContactInfoLabel>
        <ContactInfo>{match.contactInfo}</ContactInfo>
      </View>
      <Button
        onPress={async () => {
          console.log('REMOVING MATCH', data);

          await onUpdateProfile({
            matchId: data.matchId,
            p2m1Id: data.profileToMatchesIds[0],
            p2m2Id: data.profileToMatchesIds[1],
          });

          navigation.navigate('TabsLayout', { initialRouteName: 'Matches' });
        }}>
        Remove match
      </Button>
    </DetailsContainer>
  );
};
