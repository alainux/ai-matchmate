import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from '@emotion/native';
import { PLACEHOLDER_IMAGE, matchesData } from '../utils/data';
import { useNavigation } from '../hooks/useNavigation';
import { GetProfileQuery, Profile, ProfilesToMatches } from '../types/graphql';
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

const MatchName = styled.Text(({ theme }) => ({
  flex: 1,
  color: theme.tokens.textInverted,
  ...theme.text.variations.strongLarge,
  marginBottom: theme.tokens.spacer,
}));

const MatchBio = styled.Text(({ theme }) => ({
  color: theme.tokens.textInverted,
  flex: 1,
  ...theme.text.variations.base,
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

export const MatchesScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuthenticator(userSelector);

  const [matches, setMatches] = React.useState<ProfilesToMatches[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchMatches = async (id: string) => {
    setLoading(true);
    try {
      const result = await API.graphql<GraphQLQuery<GetProfileQuery>>({
        query: getProfileMatches,
        variables: {
          id: id,
        },
      });

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
    return <MatchesContainer>{/* No matches */}</MatchesContainer>;
  }

  const userFromMatch = (item: ProfilesToMatches): Profile => {
    const userFromMatch: Profile | undefined =
      item?.match?.profiles?.items.find(
        profileToMatch => profileToMatch?.profile.id !== user?.attributes?.sub,
      )?.profile as Profile | undefined;

    if (!userFromMatch) {
      throw new Error('No user from match');
    }
    return userFromMatch;
  };

  return (
    <MatchesContainer>
      <FlatList
        data={matches}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const matchUserProfile = userFromMatch(item);
          return (
            <MatchCard
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('MatchDetails', {
                  match: matchUserProfile,
                });
              }}>
              <MatchImage
                source={{
                  uri: matchUserProfile.profileImage ?? PLACEHOLDER_IMAGE,
                }}
              />
              <MatchContent>
                <MatchName>{matchUserProfile.name}</MatchName>
                <MatchBio>{matchUserProfile.bio}</MatchBio>
              </MatchContent>
            </MatchCard>
          );
        }}
      />
    </MatchesContainer>
  );
};
