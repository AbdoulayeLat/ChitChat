import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Input} from 'react-native-elements';

const AddChats = ({navigation}) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add  a new chat',
      headerBackTitle: 'Chats',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  }, [navigation]);

  const createChat = chat => {};
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Name of Chat"
        value={input}
        onChangeText={text => setInput(text)}
        leftIcon={
          <MaterialCommunityIcons name="chat" size={24} color="#050a9c" />
        }
      />
      <Button
        onPress={() => Alert.alert(input)}
        title="Create Chat"
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
};

export default AddChats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%',
  },
  button: {
    backgroundColor: 'white',
  },
});
