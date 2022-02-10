import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ResetPassword from './src/screens/ResetPassword';
import ChatScreen from './src/screens/ChatScreen';
import OTPScreen from './src/screens/OTPScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;