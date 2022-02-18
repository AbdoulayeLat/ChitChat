import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

const AddCall = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Calls ',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  }, [navigation]);
  return (
    <View>
      <Text>AddCall</Text>
    </View>
  );
};

export default AddCall;

const styles = StyleSheet.create({});
