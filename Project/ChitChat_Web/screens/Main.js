import { View, Text, Platform, useWindowDimensions } from 'react-native';
import React from 'react';
import Profile from './Profile';
import ChatScreen from './Chat/ChatScreen';
import Contact from './Chat/Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../utils/Colors';
import { auth } from '../firebase';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Main = ({route, navigation}) => {
    // const phoneNumber = auth.currentUser.phoneNumber;
    // const token = auth.currentUser.uid;
    const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'back',
        headerShown: false,
        drawerStyle:{
            backgroundColor: Colors.Secondary,
            width: "20%"
        },
        drawerActiveTintColor: Colors.Primary,
        drawerInactiveTintColor: Colors.DARK_GREY,
        drawerLabelStyle:{
            color: Colors.Primary
        }
      }}
    >   
        <Drawer.Screen name="Profile" component={Profile} options={{
            drawerLabelStyle:{
                fontSize: 20,
                fontWeight:'bold',
                alignSelf:'center'
            },
            drawerIcon: config => <Feather name="user" size={30} color={Colors.Primary} />
        }} />
        <Drawer.Screen name="Contact" component={Contact} options={{
            drawerLabelStyle:{
                fontSize: 20,
                fontWeight:'bold',
                alignSelf:'center'
            },
            drawerIcon: config => <AntDesign name="contacts" size={30} color={Colors.Primary} />,
        }} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} options={{
            drawerItemStyle:{
                display: 'none'
            },
            headerShown: true,
            headerTitleStyle:{
                color:'white',
                fontWeight:'bold'
            }
        }} />
    </Drawer.Navigator>
  )
}

export default Main;