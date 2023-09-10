// app/src/Layout/RootStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens/SplashScreen';
import {TabsLayout} from './TabsLayout';
import {MatchDetailsScreen} from '../screens/MatchDetailsScreen';
import {matchesData} from '../utils/data';

export type RootStackParamList = {
  Splash: undefined;
  TabsLayout: undefined;
  MatchDetails: {match: (typeof matchesData)[0]};
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabsLayout"
        component={TabsLayout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MatchDetails"
        component={MatchDetailsScreen}
        options={{headerTitle: 'Match Details', headerBackTitle: ''}}
      />
    </Stack.Navigator>
  );
};
