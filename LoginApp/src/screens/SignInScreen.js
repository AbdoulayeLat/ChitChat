import {StyleSheet ,View, Text, Image, useWindowDimensions, Button, TextComponent } from 'react-native';
import React from 'react';
import TextBoxCustom from '../components/TextBoxCustom';

const SignInScreen = () => {
    const {height} = useWindowDimensions();

    return (
        <View style={styles.container}>
        {/* Logo container */}
        <View style={styles.titleBackground}>
            <Image
            source={require('/Users/abdoulayendiaye/Documents/Projects/LoginApp/LoginApp/assets/Logo.png')}
            style= {[styles.logo, {height: height * 0.3}]}
            />
        </View>
        {/* Login container */}
        <View style= {styles.loginView}>
            <Text style={styles.loginTitle}>Login</Text>
            <TextBoxCustom style={styles.emailInput} text={"Enter your email/phone number"} kbType={"email-address"}/>
            <TextBoxCustom style={styles.passwordInput} text={"Enter your password"} passwordEntry={true}/>
            <Button style={styles.btnSignIn} title='Sign-In' color={"#1A1D53"}/>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#1A1D53',
    },
    loginTitle:{
        alignSelf: 'center',
    },
    titleBackground:{
      paddingTop: 50,
      paddingBottom: 10,
      alignSelf: 'center',
    },
    logo:{
      maxWidth: 250,
      maxHeight: 250,
      resizeMode: 'contain'
    },
    loginView:{
      flex:1,
      backgroundColor: '#09D3AF',
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
    },
    loginTitle:{
        fontStyle: 'italic',
        fontWeight: "bold",
        fontSize: 50,
        color: "#1A1D53",
        paddingLeft: 30,
        paddingBottom:10
    },
  });

export default SignInScreen;
