import 'react-native-gesture-handler';
import * as React from 'react';
import {} from '@react-navigation/native';
import {Providers} from './Providers';
import {AuthenticatedLayout} from './Layout/Authenticated';

export default function App() {
  return (
    <Providers>
      <AuthenticatedLayout />
    </Providers>
  );
}
