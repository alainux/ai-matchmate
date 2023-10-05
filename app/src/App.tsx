import 'react-native-gesture-handler';
import * as React from 'react';
import {} from '@react-navigation/native';
import { Providers } from './Providers';
import { AuthenticatedLayout } from './Layout/Authenticated';
import styled from '@emotion/native';
import { StatusBar } from 'react-native';

const Wrapper = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.tokens.background,
}));

export default function App() {
  return (
    <Providers>
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <AuthenticatedLayout />
      </Wrapper>
    </Providers>
  );
}
