// app/src/screens/SplashScreen.tsx
import styled from '@emotion/native';
import { faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { ViewProps } from 'react-native';

const Container = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text(({ theme }) => ({
  color: theme.tokens.buttonPrimaryText,
  ...theme.text.variations.header,
}));

const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  marginBottom: theme.tokens.spacer,
  color: theme.tokens.textPrimary,
}));

export const Logo: React.FC<ViewProps> = props => {
  return (
    <Container {...props}>
      <StyledIcon icon={faHeartCircleBolt} size={50} />
      <StyledText>AI MatchMate</StyledText>
    </Container>
  );
};
