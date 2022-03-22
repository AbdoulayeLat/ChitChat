import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Contacts from 'react-native-contacts';
import Colors from '../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth, storage, firestore } from '../firebase';
import { ref, getDownloadURL } from '@firebase/storage';
import { collection, doc, getDoc } from "firebase/firestore"; 
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';


const Profile = ({navigation}) => {
  const user = auth.currentUser;
  const token = user.uid;
  const [firstName, setFirstname] = React.useState();
  const [lastName, setLastname] = React.useState();
  const [phoneNumber, setPhonenumber] = React.useState();
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

  handleEditable = () => this.setState({ editable: true })

  //Get Data from Firestore DB
  getDoc(doc(firestore, "users", token)).then(docSnap => {
    if (docSnap.exists()) {
      setFirstname(docSnap.get("firstName"))
      setLastname(docSnap.get("lastName"))
      setPhonenumber(docSnap.get("phoneNumber"))
    } else {
      console.log("No such document!");
    }
  })

  //Download Profile Picture from Firebase Storage
  getDownloadURL(storageRef)
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    setImageURL(url)
    
  })
  .catch((error) => {
    // Handle any errors
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pictureView}>
        <Image style={styles.profilepicture} source={{uri: imageURL}} />

        <View style={styles.infoView}>
          <Text style={styles.name}>{firstName + " " + lastName}</Text>
          <Text style={styles.phoneNumber}>{": "+phoneNumber}</Text>

          <TextInput placeholder='Enter your status'/>
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
    height: 130,
    width: 130,
    borderRadius: 40,
    marginVertical: 20,
  },
  pictureView:{
    alignItems: 'center'
  },
  infoView:{
    backgroundColor: "rgba( 220, 220, 220, 0.8)",
    alignItems:'center',
    borderRadius: 30,
    width: "90%",
    height: "50%",
    marginTop: 15,
  },
  name:{
    fontSize: 30,
    color: Colors.BLACK,
    fontFamily: 'Roboto_400Regular',
    marginTop: 15,
  },
  phoneNumber:{
    fontSize: 20,
    color: Colors.LIGHT_BLACK,
    fontFamily: 'Roboto_400Regular',
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