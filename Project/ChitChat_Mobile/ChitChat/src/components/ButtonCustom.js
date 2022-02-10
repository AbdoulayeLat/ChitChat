import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.btnText}>{ props.text }</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.Primary,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    btnText:{
        color: Colors.Secondary,
        textTransform:'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
    },
});



export default ButtonCustom;
