import { View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../utils/Colors';
import * as Contacts from 'expo-contacts';
import ButtonCustom from '../../components/ButtonCustom';

const Contact = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('+1');
  
  return (
    <SafeAreaView style={styles.safeAreacontainer}>
      <View style={styles.container}>
        <Text style={styles.infoText}>Who do you want to chat with:</Text>
        <TextInput style={styles.textInput} placeholder='+11234567899' onChangeText={(text) => setPhoneNumber(text)}/>
        <ButtonCustom text={'Enter Chat'} onPress={() => navigation.navigate('ChatScreen', {
          phoneNumber: phoneNumber
        })}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreacontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
    flex: 1
  },
  textInput:{
    marginTop: 5,
    marginBottom:5,
    borderWidth:2,
    borderRadius:10,
    backgroundColor: Colors.SILVER,
    fontSize: 20,
    height: 40,
    width: 300,
    textAlign: 'center'
  },
  infoText:{
    color: Colors.Secondary,
    fontSize: 20,
    marginTop: 50,
  },
});

export default Contact;