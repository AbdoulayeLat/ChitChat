import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyContacts from './MyContacts';
import Discussions from './Discussions';
import Settings from './Settings';
import Calls from './Calls';
import * as React from 'react';

const Tab = createBottomTabNavigator();

const ChatScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Discussions"
      screenOptions={{
        tabBarActiveTintColor: '#050a9c',
        tabBarStyle: {backgroundColor: '#1f9'},
      }}>
      <Tab.Screen
        name="Contacts"
        component={MyContacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Discussions"
        component={Discussions}
        options={{
          tabBarLabel: 'Discussions',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="forum" color={color} size={size} />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ChatScreen;
