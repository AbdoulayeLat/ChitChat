import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, KeyboardAvoidingView, Image, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors.js';
import ButtonCustom from '../components/ButtonCustom.js';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { auth, firestore, storage } from '../firebase.js';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { async } from '@firebase/util';

const RegistrationScreen = ({route ,navigation}) => {
  const [firstName, setFirstname] = React.useState();
  const [lastName, setLastname] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const phoneNumber = route.params.paramKey;
  const token = route.params.paramToken;
  var url = "";
  var image = require('../utils/Images/profilepicture.png');
  
  const app = getApp();
  const storageRef = ref(storage, 'images/ProfilePictures/'+token);
  
  
  let uploadProfile = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    uploadBytes(storageRef, blob).then((snapshot) => {
      getURL();
    });
  }

  // Image Pick
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri }); 
  }

  let getURL = async () => {
    getDownloadURL(storageRef).then((url) => {
      writeToDB(url);
    });
  }


  let writeToDB = async (url) => {
    try {
        await setDoc(doc(firestore, "users", token), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          profilepictureURL: url,
        });
        navigation.navigate('Profile', {paramToken: token});
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Something went wrong! Please try again.🤕")
      }
  }
  
  if (selectedImage !== null) {
    image = { uri: selectedImage.localUri }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding':null}
      style={styles.registerScreen}
    >
      <ScrollView>
            <Text style={styles.textSignup}>Create Your Profile😄</Text>
            <View style={styles.signUpView}>

              <TouchableOpacity onPress={() => openImagePickerAsync()}>
                <Image style={styles.profilepicture} source={image}/>
              </TouchableOpacity>

              <Text style={styles.imageInfo}>*Click the Image to Pick your Profile Picture</Text>
              
              <Text style={styles.signUpTitle}>First Name</Text>
              <TextInput  style={styles.textInput} onChangeText={text => setFirstname(text)} placeholder={"Chit Chat"} placeholderTextColor = {Colors.WHITE}/>

              <Text style={styles.signUpTitle}>Last Name</Text>
              <TextInput  style={styles.textInput} onChangeText={text => setLastname(text)} placeholder={"Chit Chat"} placeholderTextColor = {Colors.WHITE}/>  

              <Text style={styles.signUpTitle}>Email</Text>
              <TextInput style={styles.textInput} onChangeText={text => setEmail(text)} placeholderTextColor = {Colors.WHITE} placeholder={"example@email.com"} keyboardType={"email-address"}/>
              
              <Text style={styles.signUpTitle}>Password</Text>
              <TextInput style={styles.textInput} onChangeText={text => setPassword(text)} placeholder={"Enter a strong password"} placeholderTextColor = {Colors.WHITE} secureTextEntry={true}/>
              
              <ButtonCustom text='CREATE ✅' onPress={() => uploadProfile(selectedImage.localUri, token+" Profile Picture")}/>
            </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    registerScreen:{
        flex:1,
        backgroundColor: Colors.BLUE,
    },
    signUpView:{
      alignItems: 'center',
    },
    signUpTitle:{
      fontSize: 20,
      color: Colors.Secondary,
      fontWeight: '600',
    },
    textSignup:{
        fontSize: 35,
        color: Colors.Secondary,
        alignSelf: 'center',
        marginTop: '15%',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    profilepicture:{
      resizeMode: 'contain',
      height: 150,
      width: 150,
      borderRadius: 40,
    },
    imageInfo:{
      color: Colors.GREEN,
      marginBottom: 10,
    },
    textInput:{
      marginVertical: 15,
      borderWidth:2,
      borderRadius:10,
      borderColor: Colors.WHITE_GREY,
      color: Colors.Secondary,
      fontSize: 20,
      height: 40,
      width: 300,
      textAlign: 'center'
    },
});

export default RegistrationScreen;
