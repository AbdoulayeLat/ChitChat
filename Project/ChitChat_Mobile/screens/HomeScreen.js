import {View, KeyboardAvoidingView, Text, Platform, TextInput, Modal, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors.js';
import ButtonCustom from '../components/ButtonCustom.js';
import { auth, firestore } from '../firebase.js';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
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
      const userRef = doc(firestore, "users", token);

      const readUser = await runTransaction(firestore, async (transaction) => {
        const user = await transaction.get(userRef);
        if (!user.exists()) {
          navigation.navigate('Registration', {
            paramKey: phoneNumber,
            paramToken: token
          })
        }else{
          navigation.replace('Main', {
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
    <KeyboardAvoidingView
      behavior= {(Platform.OS === 'ios')? "padding" : null}
      style= {styles.kbView}
    >
    <View style = {styles.homeScreen}>
        <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={app.options}
            attemptInvisibleVerification
            androidHardwareAccelerationDisabled
        />
        <Image style={styles.logoImage} source={require("../assets/img/LogoNoBG.png")}/>
        <View style={styles.loginView}>
          <Text style={styles.loginText}>WELCOME👋🏽</Text>
          <Text style={styles.textInfo}>Enter Your Phone Number:</Text>
          <TextInput style={styles.textInput} placeholder={'+11234567899'}
            onChangeText={(text) => addPhoneNumber(text)}/>
          <ButtonCustom text={'GET OTP'} onPress={() => GetOTP()}/>
          <Image style={styles.imgLogin} source={require('../assets/img/signin.png')}/>
          {/* OTP Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
          {/* Modal Content */}
          <View style={styles.modalcenteredView}>
            <KeyboardAvoidingView
              style= {styles.kbView}
              behavior = "padding"
            >
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Please Enter your One-Time-Password</Text>
              <TextInput
                 style={styles.modalTextInput}
                 keyboardType = 'number-pad'
                 autoFocus = {true} 
                 onChangeText={text => setOTP(text)}
                 maxLength={6}
              />
              <ButtonCustom text={'LOGIN'} onPress={() => checkOTP()}/>
              <Button style={styles.txtClose} title='Close' onPress={() => setModalVisible(false)}/>
            </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
        </View>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    homeScreen:{
        backgroundColor: Colors.BLUE,
        height: '100%',
    },
    logoImage:{
        resizeMode: 'contain',
        alignSelf: 'center',
        flex: 1,
        marginTop: 20,
    },
    loginView:{
      backgroundColor: Colors.Secondary,
      flex:2,
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      alignItems: 'center',
      paddingLeft: 25,    
    },
    loginText:{
      color: Colors.Primary,
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 50,
    },
    textInfo:{
      color: Colors.Primary,
      fontSize: 20,
      marginTop: 50,
    },
    imgLogin:{
      resizeMode:'contain',
      height: "50%"
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
      textAlign: 'center'
    },
    // Modal Style
    modalcenteredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    txtClose:{
      color: Colors.Secondary,
      fontSize: 20,
      marginTop: 25,
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.BLUE,
      borderRadius: 20,
      padding: 30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalTitle:{
      color: Colors.Secondary,
      fontSize: 15,
      fontWeight: '500',
    },
    modalTextInput:{
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 10,
      borderWidth:2,
      borderRadius:10,
      borderColor: Colors.WHITE,
      color: Colors.WHITE,
      fontSize: 20,
      height: 50,
      width: 150,
      textAlign: 'center',
    },
});

export default HomeScreen;
