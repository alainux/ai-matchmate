import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { matchesData } from '../utils/data';
import { useNavigation } from '../hooks/useNavigation';

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
  color: theme.tokens.buttonSecondaryText,
  ...theme.text.variations.strongLarge,
  marginBottom: theme.tokens.spacer,
}));

const MatchBio = styled.Text(({ theme }) => ({
  color: theme.tokens.buttonSecondaryText,
  flex: 1,
  ...theme.text.variations.base,
}));

const MatchContent = styled.View({
  flex: 1,
});

export const MatchesScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <MatchesContainer>
      <FlatList
        data={matchesData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MatchCard
            onPress={() => {
              navigation.navigate('MatchDetails', { match: item });
            }}>
            <MatchImage source={{ uri: item.image }} />
            <MatchContent>
              <MatchName>{item.name}</MatchName>
              <MatchBio>{item.bio}</MatchBio>
            </MatchContent>
          </MatchCard>
        )}
      />
    </MatchesContainer>
  );
};
