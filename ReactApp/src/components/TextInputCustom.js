import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Colors from '../utils/Colors';

const TextInputCustom = (props) => {
  return (
    <View>
        <TextInput 
        placeholder={props.placeholder} style={styles.textInput} 
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
    textInput:{
        marginTop: 5,
        marginBottom:5,
        borderWidth:2,
        borderColor: Colors.Primary,
        fontSize: 20,
        height: 40,
        width: 300,
        textAlign: 'center'
    }
});



export default TextInputCustom;
