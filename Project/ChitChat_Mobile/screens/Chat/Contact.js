import { View, Text, TextInput, StyleSheet, ActivityIndicator, Keyboard, Alert, SafeAreaView, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../utils/Colors';
import * as Contacts from 'expo-contacts';
import ButtonCustom from '../../components/ButtonCustom';
import {collection, addDoc, doc, setDoc, getDocs, getDoc, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import { auth, firestore, storage } from '../../firebase';
import { async } from '@firebase/util';

const Contact = ({route,navigation}) => {
  const userUID = auth.currentUser.uid;
  const [phoneNumber, setPhoneNumber] = React.useState('+1');
  const userPhoneNumber = route.params.phoneNumber;

  const checkUser = () => {
    //Get Data from Firestore DBf
    getDoc(doc(firestore, "users", phoneNumber)).then(docSnap => {
      if (docSnap.exists()) {
        navigation.navigate('ChatScreen', {
          friendPhoneNumber: phoneNumber,
          userPhoneNumber: userPhoneNumber,
        })
      } else {
        Alert.alert("This phone number hasn't registered to ChitChat yet! Invite them😉")
      }
    })
  }
  
  return (
    <SafeAreaView style={styles.safeAreacontainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.infoText}>Who do you want to chat with:</Text>
          <TextInput style={styles.textInput} keyboardType={'phone-pad'} placeholder='+11234567899' onChangeText={(text) => setPhoneNumber(text.replace(/ /g, ''))}/>
          <ButtonCustom text={'Enter Chat'} onPress={() => checkUser()}/>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreacontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
    flex:1
  },
  textInput:{
    marginTop: 5,
    marginBottom:5,
    borderWidth:2,
    borderRadius:10,
    backgroundColor: Colors.SILVER,
    fontSize: 20,
    height: 40,
    width: 300,
    textAlign: 'center'
  },
  infoText:{
    color: Colors.Secondary,
    fontSize: 20,
    marginTop: 50,
  },
});

export default Contact;