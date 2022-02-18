import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Input from '../common/Input';

const AddContacts = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add  a new Contact',
      headerBackTitle: 'Chats',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Input label="First Name" placeholder=" Enter First Name" />
      <Input label="Last Name" placeholder=" Enter Last Name" />
      <Input label="Phone Number" placeholder=" Enter Phone Number" />
    </View>
  );
};

export default AddContacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: '#4361ee',
    wrapper: {
      padding: 50,
    },
  },
});
