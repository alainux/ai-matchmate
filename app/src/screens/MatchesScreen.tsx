import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {theme} from '../utils/theme';
import {matchesData} from '../utils/data';
import {useNavigation} from '../hooks/useNavigation';

const MatchesContainer = styled.View({
  flex: 1,

  backgroundColor: 'white',
});

const MatchCard = styled(TouchableOpacity)({
  flexDirection: 'row',
  padding: theme.baseUnit * 4,
  borderWidth: 1,
  borderColor: theme.colors.border,
  borderRadius: theme.baseUnit,
  marginBottom: theme.baseUnit * 4,
  alignItems: 'center',
  backgroundColor: 'white',
});

const MatchImage = styled.Image({
  width: 50,
  height: 50,
  borderRadius: 25,
  marginRight: theme.baseUnit * 4,
});

const MatchName = styled.Text({
  color: theme.colors.textPrimary,
  flex: 1,
  ...theme.text.variations.base,
});

const MatchBio = styled.Text({
  color: theme.colors.textSecondary,
  flex: 1,
  paddingRight: 50,
  ...theme.text.variations.base,
});

const trimBio = (bio: string, n: number) =>
  bio.length > n ? bio.substring(0, n) + '...' : bio;

export const MatchesScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <MatchesContainer>
      <FlatList
        data={matchesData}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: theme.baseUnit * 8}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <MatchCard
            onPress={() => {
              navigation.navigate('MatchDetails', {match: item});
            }}>
            <MatchImage source={{uri: item.image}} />
            <View>
              <MatchName>{item.name}</MatchName>
              <MatchBio>{trimBio(item.bio, 18)}</MatchBio>
            </View>
          </MatchCard>
        )}
      />
    </MatchesContainer>
  );
};
