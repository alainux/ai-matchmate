// layouts/MyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {MatchesScreen} from '../screens/MatchesScreen';

const Tab = createBottomTabNavigator();

const TabsLayout: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
    </Tab.Navigator>
  );
};

export {TabsLayout};
