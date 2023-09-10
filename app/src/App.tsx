import * as React from 'react';
import {} from '@react-navigation/native';
import {Providers} from './Providers';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <Providers>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No content yet.</Text>
      </View>
    </Providers>
  );
}
