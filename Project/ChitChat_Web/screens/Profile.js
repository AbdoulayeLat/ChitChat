import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Colors from '../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth, storage, firestore } from '../firebase';
import { ref, getDownloadURL } from '@firebase/storage';
import { collection, doc, getDoc } from "firebase/firestore"; 
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Profile = ({ route, navigation}) => {
  const user = auth.currentUser;
  const token = user.uid;
  const [firstName, setFirstname] = React.useState();
  const [lastName, setLastname] = React.useState();
  const phoneNumber = auth.currentUser.phoneNumber;
  const [imageURL, setImageURL] = React.useState();
  const storageRef = ref(storage, 'images/ProfilePictures/'+token);

  // Load Fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  //Get Data from Firestore DBf
  getDoc(doc(firestore, "users", phoneNumber)).then(docSnap => {
    if (docSnap.exists()) {
      setFirstname(docSnap.get("firstName"))
      setLastname(docSnap.get("lastName"))
    } else {
      console.log("No such document!");
    }
  })

  //Download Profile Picture from Firebase Storage
  getDownloadURL(storageRef)
  .then((url) => {
    setImageURL(url)
  })
  .catch((error) => {
    console.log(error)
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pictureView}>
        <View style={styles.infoView}>
          <Image style={styles.profilepicture} source={{uri: imageURL}} />
          <Text style={styles.name}>{firstName + " " + lastName}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Colors.Primary,
  },
  profilepicture:{ 
    resizeMode: 'contain',
    height: 140,
    width: 140,
    borderRadius: 40,
    marginVertical: 20,
  },
  pictureView:{
    alignItems: 'center'
  },
  infoView:{
    backgroundColor: Colors.Secondary,
    alignItems:'center',
    borderRadius: 30,
    width: "80%",
    height: 255,
    marginTop: 15,
  },
  optionView:{
    backgroundColor: Colors.Secondary,
    alignItems:'center',
    borderRadius: 30,
    width: "90%",
    height: 365,
    marginTop: 20,
  },
  name:{
    fontSize: 30,
    color: Colors.BLACK,

  },
  phoneNumber:{
    fontSize: 20,
    color: Colors.LIGHT_BLACK,

    marginTop: 5,
  },
  editInfo:{
    fontSize:15,
    marginVertical:10,
    color: Colors.LIGHT_BLACK,
  },
  status:{
    color: Colors.BLACK
  },
});

export default Profile;