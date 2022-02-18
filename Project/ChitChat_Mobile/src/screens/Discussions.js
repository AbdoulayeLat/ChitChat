import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import CustomList from '../components/CustomList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Searchbar} from 'react-native-paper';

const Discussions = ({navigation}) => {
  const [chats, setChats] = useState('');

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  /*const enterChat = (id,chatName) => {
  navigation.navigate("Chat", {
  id, chatName
  });
}*/
  /*useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot( snapshot =>(
      setChats(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data()
      })))
    )
      
      )
      return unsubscribe
 }, [])*/
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chats ',
      headerStyle: {backgroundColor: '#1f9'},
      headerTitleStyle: {color: '#050a9c'},
      headTintColor: 'black',
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 80,
            marginRight: 20,
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="camera" size={24} color="#050a9c" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddChats')}>
            <MaterialCommunityIcons name="pencil" size={24} color="#050a9c" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        {/*{chats.map(({id,data: {chatName}}) =>(
            <CustomList key={id} id={id} chatName={chatName} />
          ))}*/}
        <CustomList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discussions;

const styles = StyleSheet.create({
  container: {},
});
