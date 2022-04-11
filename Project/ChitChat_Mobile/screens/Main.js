import { View, Text, Platform } from 'react-native';
import React from 'react';
import Profile from './Profile';
import ChatScreen from './Chat/ChatScreen';
import Contact from './Chat/Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../utils/Colors';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Main = ({route, navigation}) => {
    const phoneNumber = route.params.paramKey;
    const token = route.params.paramToken;
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Profile') {
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Chat') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }else if (route.name === 'Contact') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: Colors.Secondary,
                position: 'absolute',
                bottom: 20,
                left: Platform.OS == "android" ? 10 : 15,
                right: Platform.OS == "android" ? 10 : 15,
                elevation: 0,
                borderRadius: 20,
                height: Platform.OS == "android" ? 60 : 80
            },
            tabBarIconStyle:{
                marginTop: Platform.OS == "android" ? 10 : 20
            }
        })}
    >
        <Tab.Screen name='Profile' component={Profile} options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
                <Feather name="user" size={Platform.OS == "android" ? 40 : 30} color={focused ? 'white' : 'gray'} />
            ), 
        }} initialParams={{phoneNumber, token}}/>
        <Tab.Screen name='Chat' component={Contact} options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
                <Ionicons name="chatbox-ellipses" size={Platform.OS == "android" ? 40 : 30} color={focused ? 'white' : 'gray'} />
            ), 
        }} initialParams={{phoneNumber:phoneNumber, token:token}}/>
    </Tab.Navigator>
  )
}

export default Main;