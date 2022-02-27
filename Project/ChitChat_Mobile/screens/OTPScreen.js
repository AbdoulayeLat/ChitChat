import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';



// async function signInWithPhoneNumber() {
//  try{
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }catch(e){
//    alert(e);
//  }
// }

// async function confirmCode() {
//   try{
//   const code = otpArray.join("");
//   const response = await confirm.confirm(code);
//   if(response){
//     alert("Confirmed"); //When code is confirmed changes here
//   }
//   } catch(e){
//     alert(e);
//   }
// }

const OTPScreen = () => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.titleView}>Enter your One-Time-Password</Text>
      <View style={{marginBottom: '100%'}}>
        <OTPInputView
          style = {styles.OTPViewStyle}
          pinCount={6} 
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled = {(code) => {
            console.log(`Code is ${code}, you are good to go!`)}}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor: Colors.Secondary,
  },

  titleView:{
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE,
    marginTop: "20%"
  },

  OTPViewStyle:{
    marginHorizontal: 10,
  },

  borderStyleHighLighted: {
    borderColor: Colors.Primary,
  },

  underlineStyleBase: {
    width: 40,
    height: 55,
    borderWidth: 2,
    borderBottomWidth: 2,
    color: Colors.Primary,
    fontWeight: 'bold'
  },

  underlineStyleHighLighted: {
    borderColor: Colors.Primary,
  },
});

export default OTPScreen;