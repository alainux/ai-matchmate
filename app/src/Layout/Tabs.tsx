// layouts/MyTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {MatchesScreen} from '../screens/MatchesScreen';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';

const Tab = createBottomTabNavigator();

const TabsLayout: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faComment} />,
        }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHeart} />,
        }}
        name="Matches"
        component={MatchesScreen}
      />
    </Tab.Navigator>
  );
};

export {TabsLayout};
