// app/src/screens/SplashScreen.tsx
import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeartCircleBolt} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '../hooks/useNavigation';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
});

const StyledText = styled.Text(({theme}) => ({
  color: theme.colors.textSecondary,
  ...theme.text.variations.header,
}));

const StyledIcon = styled(FontAwesomeIcon)(({theme}) => ({
  marginBottom: theme.baseUnit * 4,
  color: theme.colors.primary,
}));

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TabsLayout');
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <StyledIcon icon={faHeartCircleBolt} size={50} />
      <StyledText>AI MatchMate</StyledText>
    </Container>
  );
};
