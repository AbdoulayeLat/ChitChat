import { View, Text, StyleSheet, Image, Alert, Button, SafeAreaView} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors.js';
import { useFonts, Poppins_400Regular, Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import TextInputCustom from '../components/TextInputCustom.js';

const HomeScreen = ({navigation}) => {
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
        fontFamily: 'Poppins_700Bold',
        alignSelf:'center',
        color: Colors.Primary,
    },
    resetScreen:{
        flex:1,
        backgroundColor: Colors.Secondary,
    },
    resetTitle:{
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        marginTop: 15,
        color: Colors.Primary,
    },
    passwordResetView:{
        alignItems: 'center'
    },
});

export default HomeScreen;