import React, {useState, useLayoutEffect, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Contacts from 'react-native-contacts';
import {Button, Input} from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';

export default function AddContact({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState(['']);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add  a new Contact',
      headerBackTitle: 'Contacts',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  }, [navigation]);

  useEffect(() => {
    if (phoneNumber[phoneNumber.length - 1].length > 0) {
      setphoneNumber(prevState => [...prevState, '']);
    }
    try {
      if (
        phoneNumber[phoneNumber.length - 2].length === 0 &&
        phoneNumber.length >= 2
      ) {
        setphoneNumber(prevState => {
          const newState = prevState.slice();
          newState.pop();
          return newState;
        });
      }
    } catch {}
  }, [phoneNumber]);

  function addContact() {
    if ((!firstName && !lastName) || phoneNumber.length === 1) {
      Alert.alert('Something went wrong', 'Please fill all the  fields');
      return;
    }
    const myphoneNumber = phoneNumber.map(ph => {
      return {label: 'mobile', number: ph};
    });

    const contactInfo = {
      displayName: firstName + ' ' + lastName,
      givenName: firstName + ' ' + lastName,
      phoneNumber: myphoneNumber,
    };
    Contacts.addContact(contactInfo)
      .then(() => navigation.navigate('Contacts'))
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          label="First Name"
          placeholder=" Enter First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Input
          label="Last Name"
          placeholder=" Enter Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>
      {phoneNumber.map((phoneNumber, index) => (
        <View style={{...styles.inputContainer, marginVertical: 0}} key={index}>
          <PhoneInput
            label="Phone Number"
            style={styles.input}
            defaultCode="CA"
            placeholder="Phone Number"
            keyboardType="number-pad"
            shadowOffset
            value={phoneNumber}
            onChangeText={text =>
              setphoneNumber(prevState => {
                const newState = prevState.slice();
                newState[index] = text;
                return newState;
              })
            }
          />
        </View>
      ))}
      <Button
        onPress={() => addContact()}
        title="Create Contact"
        buttonStyle={{
          borderColor: 'rgba(78, 116, 289, 1)',
          backgroundColor: '#1f9',
        }}
        type="outline"
        raised
        titleStyle={{color: '#050a9c'}}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 10,
    margin: 10,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 10,
  },
});
