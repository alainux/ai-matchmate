import styled from '@emotion/native';
import React, { useEffect } from 'react';
import { Logo } from '../components/Logo';
import { useNavigation } from '../hooks/useNavigation';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.common.container,
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
      <Logo />
    </Container>
  );
};
