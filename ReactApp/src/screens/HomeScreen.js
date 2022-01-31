import { View, Text, StyleSheet, Image, Alert, Button} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors.js';
import { useFonts, Poppins_400Regular, Poppins_500Medium_Italic, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import TextInputCustom from '../components/TextInputCustom.js';

const HomeScreen = ({navigation}) => {
  let[fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium_Italic
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <View style = {styles.homeScreen}>
        <Image style={styles.logoImage} source={require("../assets/img/LogoNoBG.png")}/>
        <View style={styles.loginView}>
          <Text style={styles.loginTitle}>Login</Text>

          <Text style={styles.emailTitle}>Email/PhoneNumber</Text>
          <TextInputCustom placeholder={"Enter your Email/PhoneNumber"} 
              keyboardType={"email-address"} style={styles.emailInput}/>

          <Text style={styles.passwordTitle}>Password</Text>
          <TextInputCustom placeholder={"Enter your Password"} 
              secureTextEntry={true} style={styles.passwordInput}/>

          <Button style={styles.btnSignIn} title='Sign-In' 
              color={Colors.Primary} onPress={() => Alert.alert('Button Pressed')}/>

          <Text style={styles.passwordResetText} 
              onPress={() => navigation.navigate('ResetPassword')}>Forgot your password? <Text 
                style={styles.innerPasswordResetText}>Reset it!</Text></Text>

          <Text style={styles.signUpText} 
              onPress={() => navigation.navigate('Registration')}>Don't have an account yet? 
              <Text style={styles.innerSignUpText}>Sign-Up!</Text></Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    homeScreen:{
        backgroundColor: Colors.Primary,
        height: '100%',
    },
    logoImage:{
        resizeMode: 'contain',
        flex: 1,
        marginTop: 20,
    },
    loginView:{
      backgroundColor: Colors.Secondary,
      flex:2,
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      alignItems: 'flex-start',
      paddingLeft: 25,    
    },
    loginTitle:{
      fontSize: 50,
      fontFamily: "Poppins_600SemiBold",
      color: Colors.Primary,
      marginTop: 20
    },
    emailTitle:{
      fontFamily: "Poppins_500Medium_Italic",
      fontSize: 25,
      marginTop: 30,
      color: Colors.Primary
    },
    passwordTitle:{
      fontFamily: "Poppins_500Medium_Italic",
      fontSize: 25,
      marginTop: 10,
      color: Colors.Primary
    },
    signUpText:{
      fontFamily: "Poppins_500Medium_Italic",
      fontSize: 17,
      marginTop: 15,
      color: Colors.Primary
    },
    innerSignUpText:{
      fontFamily: "Poppins_500Medium_Italic",
      fontSize: 17,
      marginTop: 5,
      color: 'antiquewhite'
    },
    passwordResetText:{
      fontFamily: "Poppins_500Medium_Italic",
      fontSize: 17,
      marginTop: 10,
      color: Colors.Primary
    },
    innerPasswordResetText:{
      fontFamily: "Poppins_500Medium_Italic",
      fontSize: 17,
      marginTop: 5,
      color: 'antiquewhite'
    },
});

export default HomeScreen;
