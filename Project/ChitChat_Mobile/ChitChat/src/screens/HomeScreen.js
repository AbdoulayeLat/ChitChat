import { View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors.js';
import TextInputCustom from '../components/TextInputCustom.js';
import ButtonCustom from '../components/ButtonCustom.js';

const HomeScreen = ({navigation}) => {

  const [phoneNumber, addPhoneNumber] = React.useState('+1');

    const GetOTP = () => {
        if(phoneNumber && phoneNumber.length > 9){
          navigation.navigate('OTPScreen', {phoneNumber});
        }
        else
          alert("Please enter a 10 digit number");
    }

  return (
    <View style = {styles.homeScreen}>
        <Image style={styles.logoImage} source={require("../assets/img/LogoNoBG.png")}/>
        <View style={styles.loginView}>
          <Text style={styles.loginText}>WELCOME</Text>
          <Text style={styles.textInfo}>Enter Your Phone Number:</Text>
          <TextInput style={styles.textInput} placeholder={'+1 1234567899'}
            onChangeText={(text) => addPhoneNumber(text)}/>
          <ButtonCustom text={'Sign in'} onPress={GetOTP}/>
          <Image style={styles.imgLogin} source={require('../assets/img/signin.png')}/>
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
});

export default HomeScreen;
