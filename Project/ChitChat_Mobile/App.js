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
import ContactList from './src/screens/ContactList';
import AddChats from './src/screens/AddChats';
import AddContacts from './src/screens/AddContacts';
import AddCall from './src/screens/AddCall';

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
        <Stack.Screen name="AddContacts" component={AddContacts} />
        <Stack.Screen
          name="Contacts"
          component={ContactList}
          options={{headerShown: false}}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
