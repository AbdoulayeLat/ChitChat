import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ResetPassword from './src/screens/ResetPassword';
import ChatScreen from './src/screens/ChatScreen';
import OTPScreen from './src/screens/OTPScreen';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import AddChats from './src/screens/AddChats';
import AddContact from './src/screens/AddContact';
import AddCall from './src/screens/AddCall';
import Profile from './src/screens/Profile';
import MyContacts from './src/screens/MyContacts';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chats"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddChats" component={AddChats} />
        <Stack.Screen name="AddContact" component={AddContact} />
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
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddCall" component={AddCall} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MyContacts" component={MyContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
