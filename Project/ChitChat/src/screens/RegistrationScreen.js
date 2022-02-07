import { View, Text, StyleSheet, Image, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors.js';
import { useFonts, Poppins_400Regular, Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import TextInputCustom from '../components/TextInputCustom.js';
import UploadImage from '../components/UploadImage.js';


const RegistrationScreen = () => {
    let[fontsLoaded, error] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_500Medium_Italic,
        Poppins_700Bold
      });
    
    if (!fontsLoaded){
        return <AppLoading/>;
    }  

  return (
    <SafeAreaView style={styles.registerScreen}>
        <Text style={styles.textSignup}>Sign Up</Text>
        <View style={styles.signUpView}>
          <UploadImage/>

          <Text style={styles.signUpTitle}>Full Name</Text>
          <TextInputCustom placeholder={"Chit Chat"} />

          <Text style={styles.signUpTitle}>Email</Text>
          <TextInputCustom placeholder={"example@email.com"} keyboardType={"email-address"}/>

          <Text style={styles.signUpTitle}>Password</Text>
          <TextInputCustom placeholder={"Enter a strong password"} secureTextEntry={true}/>

          <Text style={styles.signUpTitle}>Password Confirmation</Text>
          <TextInputCustom placeholder={"Enter your password again"} secureTextEntry={true}/>

          <Text style={styles.signUpTitle}>Phone Number</Text>
          <TextInputCustom placeholder={"111-222-3456"} keyboardType={"numeric"}/>

          <Button title='Sign Up' onPress={() => Alert.alert('SignUp!')}/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    registerScreen:{
        flex:1,
        backgroundColor: Colors.Secondary,
    },
    signUpView:{
      alignItems: 'center'
    },
    signUpTitle:{
      fontSize: 20,
      fontFamily: 'Poppins_600SemiBold',
      marginTop: 15,
      color: Colors.Primary,
    },
    textSignup:{
        fontSize: 50,
        fontFamily: 'Poppins_700Bold',
        margin: 15,
        color: Colors.Primary,
    },
});

export default RegistrationScreen;
