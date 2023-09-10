import 'react-native-gesture-handler';
import * as React from 'react';
import {} from '@react-navigation/native';
import { Providers } from './Providers';
import { AuthenticatedLayout } from './Layout/Authenticated';
import styled from '@emotion/native';

const Wrapper = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.tokens.background,
}));

export default function App() {
  return (
    <Providers>
      <Wrapper>
        <AuthenticatedLayout />
      </Wrapper>
    </Providers>
  );
}
