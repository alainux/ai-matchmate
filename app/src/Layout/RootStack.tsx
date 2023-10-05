// app/src/Layout/RootStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '../screens/SplashScreen';
import { TabsLayout, TabsLayoutScreenParams } from './TabsLayout';
import { MatchDetailsScreen } from '../screens/MatchDetailsScreen';
import { theme } from '../utils/theme';
import { Profile } from '../types/graphql';
import OnboardingStack from './OnboardingStack';

export type RootStackParamList = {
  Splash: undefined;
  TabsLayout: TabsLayoutScreenParams;
  MatchDetails: { match: Profile, data: { matchId: string, profileToMatchesIds: string[]} };
  OnboardingStack: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='TabsLayout'
      screenOptions={{
        ...theme.navigation.header,
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabsLayout"
        component={TabsLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchDetails"
        component={MatchDetailsScreen}
        options={{ headerTitle: 'Match Details', headerBackTitle: '' }}
      />
      <Stack.Screen
        name="OnboardingStack"
        component={OnboardingStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
