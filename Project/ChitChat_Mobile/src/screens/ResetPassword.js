import { View, Text, StyleSheet, Image, Alert, Button, SafeAreaView} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors.js';
import TextInputCustom from '../components/TextInputCustom.js';

const ResetPassword = ({navigation}) => {

  return (
      <SafeAreaView style={styles.resetScreen}>
          <Text style={styles.textReset}>Reset your password</Text>
          <View style={styles.passwordResetView}>
            <Text style={styles.resetTitle}>Enter your Email address</Text>
            <TextInputCustom placeholder={"example@email.com"} keyboardType={"email-address"}/>
            <Button title='Reset password' onPress={() => Alert.alert('Reset Password')}/>
          </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textReset:{
        fontSize: 30,
        alignSelf:'center',
        color: Colors.Primary,
    },
    resetScreen:{
        flex:1,
        backgroundColor: Colors.Secondary,
    },
    resetTitle:{
        fontSize: 20,
        marginTop: 15,
        color: Colors.Primary,
    },
    passwordResetView:{
        alignItems: 'center'
    },
});

export default ResetPassword;