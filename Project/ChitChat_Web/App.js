import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Colors from './utils/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/Chat/ChatScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import Main from './screens/Main';
import {auth} from './firebase.js'

const Stack = createStackNavigator();

export default function App() {
  const [initialRouteName, setInitialRouteName] = React.useState("Home")
  
  auth.onAuthStateChanged(user => {
    if (user){
     setInitialRouteName("Main")
    }
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = {initialRouteName}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
