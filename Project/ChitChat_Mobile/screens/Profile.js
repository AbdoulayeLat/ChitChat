import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Contacts from 'react-native-contacts';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getColorByLetter} from '../utils/Index';
import Colors from '../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pictureView}>
        <Image style={styles.profilepicture} source={require("../utils/Images/profilepicture.png")}/>
        <Text>Name</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
  },
  profilepicture:{
    overflow: 'hidden',
    height: 200,
    width: 200,
    borderRadius: 150/2,
  },
  pictureView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
});
