import { View, Text, StyleSheet, Image, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors.js';
import TextInputCustom from '../components/TextInputCustom.js';


const RegistrationScreen = () => {

  return (
    <SafeAreaView style={styles.registerScreen}>
        <Text style={styles.textSignup}>Sign Up</Text>
        <View style={styles.signUpView}>

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
      marginTop: 15,
      color: Colors.Primary,
    },
    textSignup:{
        fontSize: 50,
        margin: 15,
        color: Colors.Primary,
    },
});

export default RegistrationScreen;
