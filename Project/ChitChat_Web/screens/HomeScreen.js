import {View, KeyboardAvoidingView, Text, Platform, TextInput, Modal, Pressable, StyleSheet, Image, Button} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors.js';
import { auth, firestore } from '../firebase.js';
import { getApp } from 'firebase/app';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { async } from '@firebase/util';
import { collection, query, where, getDocs, doc, runTransaction } from "firebase/firestore";

const app = getApp();
const HomeScreen = ({navigation}) => {
  const recaptchaVerifier = React.useRef(null);
  const [confirmationResult, setConfirmationResult] = React.useState();
  const firebaseConfig = app ? app.options : undefined;
  const attemptInvisibleVerification = false;
  const [verificationId, setVerificationId] = React.useState();
  
  const [phoneNumber, addPhoneNumber] = React.useState('+1');
  const [otp, setOTP] = React.useState('')
  const [modalVisible, setModalVisible] = useState(false);
  
  const GetOTP = async () => {
    if(phoneNumber && phoneNumber.length > 9){
      // The FirebaseRecaptchaVerifierModal ref implements the
      // FirebaseAuthApplicationVerifier interface and can be
      // passed directly to `verifyPhoneNumber`.
      try {
        const phoneProvider = new PhoneAuthProvider(auth);
        const verificationId = await phoneProvider.verifyPhoneNumber(
          phoneNumber,
          recaptchaVerifier.current
        );
        setVerificationId(verificationId);
        setModalVisible(true);
      } catch (err) {
        alert(err.message);
      }
    }   
    else{
      alert("Please enter a 10 digit number");
    }
  }

  const checkOTP = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      await signInWithCredential(auth, credential);
      setModalVisible(false)
      const token = auth.currentUser.uid;
      const userRef = doc(firestore, "users", phoneNumber);

      const readUser = await runTransaction(firestore, async (transaction) => {
        const user = await transaction.get(userRef);
        if (!user.exists()) {
          navigation.navigate('Registration', {
            paramKey: phoneNumber,
            paramToken: token
          })
        }else{
          navigation.replace('Main', {
            paramKey: phoneNumber,
            paramToken: token
          })
        }
      });
    } catch (err) {
      setModalVisible(false)
      console.log(err.message);
    }
  }

  
  return(
    <View style={styles.homeScreen}>
      <View style={styles.loginView}>
        <Image source={require('../assets/img/Logo.png')} style={{width:200, height:200, marginTop:20, borderRadius:40}} />

        <Text style={styles.loginText}>WELCOME👋🏽</Text>
        <Text style={styles.textInfo}>Enter Your Phone Number:</Text>
        <TextInput style={styles.textInput} placeholder={'+11234567899'}
          onChangeText={(text) => addPhoneNumber(text.replace(/ /g, ''))}/>
        <Text style={{color:'grey', fontSize:15}} >*You will receive a code on your phone number</Text>
        <Pressable style={styles.btnOTP} onPress = {() => GetOTP()}>
          <Text style={{color:Colors.Secondary, fontWeight:'700', fontSize:20, padding:10}}>Get OTP</Text>
        </Pressable>

        <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={app.options}
            attemptInvisibleVerification
            androidHardwareAccelerationDisabled
        />

        <TextInput style={styles.textInput} placeholder={'Enter your One-Time-Password'}
          onChangeText={(text) => setOTP(text)}/>
        <Pressable style={styles.btnLogin} onPress = {() => checkOTP()} >
          <Text style={{color:Colors.Secondary, fontWeight:'700', fontSize:20, padding:10}}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    homeScreen:{
        backgroundColor: Colors.Primary,
        flex:1,
        alignItems:'center',
    },
    loginView:{
      backgroundColor: Colors.Secondary,
      height: '80%',
      width:'35%',
      borderRadius: 40,
      alignItems:'center',
      marginTop:'3%'
    },
    loginText:{
      color: Colors.Primary,
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 20,
    },
    textInput:{
      marginTop: 5,
      marginBottom:5,
      borderWidth:2,
      borderRadius:10,
      borderColor: Colors.Primary,
      fontSize: 20,
      height: 40,
      width: 300,
      textAlign: 'center',
    },
    textInfo:{
      color: Colors.Primary,
      fontSize: 20,
      marginTop: 18,
      fontWeight:'bold',
    },
    btnOTP:{
      backgroundColor: Colors.Primary,
      borderRadius:10,
      marginTop: 10,
      marginBottom: 5
    },
    btnLogin:{
      backgroundColor: Colors.Primary,
      borderRadius:10,
      marginTop: 5
    },
});

export default HomeScreen;
