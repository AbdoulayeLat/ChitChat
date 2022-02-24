import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Contacts from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import ContactCard from '../components/ContactCard';

export default function MyContacts({navigation}) {
  const isFocused = useIsFocused();

  const [myContacts, setMyContacts] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Contacts',

      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  }, [navigation]);
  useEffect(() => {
    getAllContacts();
  }, [isFocused]);

  async function getAllContacts() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (permission === 'granted') {
        const contacts = await Contacts.getAll();
        console.log(contacts);
        setMyContacts(contacts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="account-plus"
        size={40}
        color="#050a9c"
        style={styles.addIcon}
        onPress={() => navigation.navigate('AddContact')}
      />
      <FlatList
        data={myContacts}
        keyExtractor={item => item.recordID}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {
                contactInfo: {id: item.recordID},
              })
            }>
            <ContactCard contactInfo={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addIcon: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    zIndex: 1,
  },
});
