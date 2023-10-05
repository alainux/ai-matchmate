// app/src/Layout/TabsLayout.tsx
import {
  faComment,
  faHeart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultRouterOptions } from '@react-navigation/native';
import React from 'react';
import { ChatScreen } from '../screens/ChatScreen';
import { MatchesScreen } from '../screens/MatchesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { theme } from '../utils/theme';
import { useNavigation } from '../hooks/useNavigation';
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStack';


export type TabsParamList = {
  Chat: undefined;
  Matches: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<TabsParamList>();

export type TabsLayoutScreenParams = Pick<DefaultRouterOptions<keyof TabsParamList>, 'initialRouteName'>;
type ScreenProps = StackScreenProps<RootStackParamList, 'TabsLayout'>;
export const TabsLayout: React.FC<ScreenProps> = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarBackground: theme.tokens.background,
        tabBarActiveTintColor: theme.tokens.textPrimary,
        tabBarInactiveTintColor: theme.tokens.text,
        tabBarLabelStyle: {
          ...theme.text.variations.small,
        },
        tabBarStyle: {
          height: theme.baseUnit * 20,
          paddingBottom: theme.tokens.spacer,
          paddingTop: theme.tokens.spacer,
          backgroundColor: theme.tokens.background,
          borderTopColor: 'transparent',
          borderWidth: 0,
        },
        ...theme.navigation.header,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Chat') {
            iconName = faComment;
          } else if (route.name === 'Profile') {
            iconName = faUserCircle;
          } else if (route.name === 'Matches') {
            iconName = faHeart;
          }

          if (!iconName) {
            return null;
          }

          // You can return any component that you like here!
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName={route?.params?.initialRouteName ?? 'Matches'}>
      <Tab.Screen
        name="Chat"
        options={{ headerTitle: 'Matchmate Chat' }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{ headerTitle: 'Your Matches' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: 'Your Profile' }}
      />
    </Tab.Navigator>
  );
};
