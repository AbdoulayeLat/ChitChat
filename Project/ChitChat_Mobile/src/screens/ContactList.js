import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Searchbar} from 'react-native-paper';

const ContactList = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Contacts ',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
    });
  });
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddContacts')}>
        <MaterialCommunityIcons name="account-plus" size={24} color="#050a9c" />
      </TouchableOpacity>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,

    top: -5,
    position: 'absolute',
    right: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
