import React from 'react';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';

const TextBoxCustom = (props) => {
    const [text, setText] = React.useState("");

    return (
        <View>
            <TextInput
                placeholder={props.text}

                style= {styles.input}
                onChangeText={text => setText(text)}
                keyboardType={props.kbType}
                secureTextEntry={props.passwordEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 50,
        margin: 10,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
        borderRadius: 15,
        fontSize: 17,
    }
});

export default TextBoxCustom;