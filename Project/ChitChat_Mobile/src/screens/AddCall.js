import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import MyContacts from './MyContacts';

const AddCall = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'New Call',
      headerBackTitle: 'Calls',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  }, [navigation]);
  return (
    <View>
      <Text>Hi </Text>
    </View>
  );
};

export default AddCall;

const styles = StyleSheet.create({});
