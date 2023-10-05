import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from '@emotion/native';
import { PLACEHOLDER_IMAGE } from '../utils/data';
import { useNavigation } from '../hooks/useNavigation';
import { Profile, ProfilesToMatches } from '../types/graphql';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { userSelector } from '../utils/aws';

const MatchesContainer = styled.View(({ theme }) => ({
  flex: 1,
  ...theme.common.container,
}));

const MatchCard = styled(TouchableOpacity)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  ...theme.common.surfaceDimensions,
  marginBottom: theme.tokens.spacer,
  backgroundColor: theme.tokens.buttonSecondary,
}));

const MatchImage = styled.Image(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: 25,
  marginRight: theme.tokens.spacer,
}));

const CardTitle = styled.Text(({ theme }) => ({
  color: theme.tokens.textInverted,
  ...theme.text.variations.strongLarge,
  marginBottom: theme.baseUnit,
}));

const CardText = styled.Text(({ theme }) => ({
  color: theme.tokens.textInverted,
  flex: 1,
  ...theme.text.variations.base,
}));

const Strong = styled(CardText)(({ theme }) => ({
  ...theme.text.variations.strong,
}));

const MatchContent = styled.View({
  flex: 1,
});

const getProfileMatches = `
query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    email
    matches {
      items {
        __typename
        id
        match {
          __typename
          id
          compatibility
          profiles {
            items {
              __typename
              id
              profile {
                __typename
                id
                email
                name
                profileImage
                bio
                contactInfo
              }
            }
          }
        }
      }
    }
  } 
}`;

const Text = styled.Text(({ theme }) => ({
  ...theme.text.variations.base,
  color: theme.tokens.text
}));

const pcg = (n?: number | null) => `${((n??0) * 100).toFixed(1)}%`;

export const MatchesScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuthenticator(userSelector);

  const [matches, setMatches] = React.useState<ProfilesToMatches[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchMatches = async (id: string) => {
    setLoading(true);
    try {
      const result = await API.graphql<GraphQLQuery<any>>({
        query: getProfileMatches,
        variables: {
          id: id,
        },
      });

      console.log('MATCHES RES', JSON.stringify(result, null, 4))
      const matches = (result?.data?.getProfile?.matches?.items ?? []).filter(
        Boolean,
      ) as ProfilesToMatches[];

      if (!matches.length) {
        console.log(
          'no matches for user',
          { id },
          JSON.stringify(result, null, 4),
        );
        return;
      }
      setMatches(matches);
    } catch (e) {
      console.log('error fetching user profile', { id }, e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.attributes?.sub) {
      fetchMatches(user.attributes.sub);
    }
  }, [user]);

  if (loading) {
    return (
      <MatchesContainer>
        <ActivityIndicator />
      </MatchesContainer>
    );
  } else if (!matches.length) {
    return <MatchesContainer style={{ alignItems: 'center'}}><Text>Your matches will show up here.</Text></MatchesContainer>;
  }

  const userFromMatch = (item: ProfilesToMatches): {profile: Profile, data: { matchId: string, profileToMatchesIds: string[]}} => {
    const userFromMatch: Profile | undefined =
      item?.match?.profiles?.items.find(
        profileToMatch => profileToMatch?.profile.id !== user?.attributes?.sub,
      )?.profile as Profile | undefined;

    if (!userFromMatch) {
      throw new Error('No user from match');
    }

    const matchId = item?.match?.id;
    const profileToMatchesIds = item?.match?.profiles?.items?.map((p2m) => p2m?.id).filter((id): id is string => Boolean(id)) ?? [];

    return { profile: userFromMatch, data: { matchId, profileToMatchesIds }};
  };

  return (
    <MatchesContainer>
      <FlatList
        data={matches}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const {profile: matchUserProfile, data} = userFromMatch(item);
          return (
            <MatchCard
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('MatchDetails', {
                  match: matchUserProfile,
                  data: data,
                });
              }}>
              <MatchImage
                source={{
                  uri: matchUserProfile.profileImage ?? PLACEHOLDER_IMAGE,
                }}
              />
              <MatchContent>
                <CardTitle>{matchUserProfile.name}</CardTitle>
                <CardText>{matchUserProfile.bio}</CardText>
                <CardText><Strong>Compatibility</Strong>: {pcg(item?.match?.compatibility) }</CardText>
              </MatchContent>
            </MatchCard>
          );
        }}
      />
    </MatchesContainer>
  );
};
