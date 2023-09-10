// app/src/Layout/TabsLayout.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {MatchesScreen} from '../screens/MatchesScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faComment,
  faUserCircle,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {theme} from '../utils/theme';

const Tab = createBottomTabNavigator();

export const TabsLayout: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: {
          fontFamily: 'Lexend-Regular', // Assuming you've linked Lexend properly.
          fontSize: 12,
        },
        tabBarStyle: {
          borderTopColor: 'transparent',
          height: theme.baseUnit * 20,
          paddingBottom: theme.baseUnit * 4,
          paddingTop: theme.baseUnit * 4,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => {
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
      })}>
      <Tab.Screen
        name="Chat"
        options={{headerTitle: 'AI MatchMate Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{headerTitle: 'Your Matches'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerTitle: 'Your Profile'}}
      />
    </Tab.Navigator>
  );
};