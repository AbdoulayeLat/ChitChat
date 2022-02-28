import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Calls = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Calls ',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: 80,
            marginRight: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('MyContacts')}>
            <MaterialCommunityIcons
              name="phone-plus"
              size={24}
              color="#050a9c"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return <View></View>;
};

export default Calls;

const styles = StyleSheet.create({});
