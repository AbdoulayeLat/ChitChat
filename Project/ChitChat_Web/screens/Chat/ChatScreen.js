import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth, firestore, storage } from '../../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, doc, setDoc, getDoc, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import { ref, getDownloadURL } from '@firebase/storage';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import Colors from '../../utils/Colors';
import { useEffect } from 'react';

const ChatScreen = ({ route, navigation }) => {
    const [messages, setMessages] = useState([]);
    const [friendName, setFriendName] = useState();
    const token = auth.currentUser.uid;
    const [imageURL, setImageURL] = React.useState();
    const phoneNumber = auth.currentUser.phoneNumber;
    const friendPhoneNumber = route.params.friendPhoneNumber;
    const [friendUID, setFrienUID] = React.useState();
    const storageRef = ref(storage, 'images/ProfilePictures/'+token);

    const signOutNow = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
          navigation.replace('Home');
      }).catch((error) => {
          // An error happened.
      });
    }

    getDownloadURL(storageRef)
    .then((url) => {
      setImageURL(url)
    })
    .catch((error) => {
      console.log(error)
    });
    
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={{
                marginRight: 10
            }}
                onPress={signOutNow}
            >
                <Text style={{color: 'white', fontWeight:'bold', fontSize:18}}>Logout</Text>
            </TouchableOpacity>
          ),
          title: friendPhoneNumber,
          headerStyle:{
            backgroundColor: Colors.Primary,
          }
        })
    }, [navigation]);
      
    useEffect(() => {
      const q = query(collection(firestore, 'chats/'+phoneNumber+"/"+friendPhoneNumber.toString()), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
          snapshot.docs.map(doc => ({
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user,
          }))
      ));
      return () => {
        unsubscribe();
      };
    })

    const onSend = useCallback(async (messages = [], phoneNumber, friendName, friendPhoneNumber) => {
        const { _id, createdAt, text, user} = messages[0]
        addDoc(collection(firestore, 'chats/'+phoneNumber+"/"+friendPhoneNumber), { _id, createdAt,  text, user });
        addDoc(collection(firestore, 'chats/'+friendPhoneNumber+"/"+phoneNumber), { _id, createdAt,  text, user });
    }, []);

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius: 10,
          marginHorizontal: 5,
          justifyContent: 'center',
        }}
      />
    );
  };
  

  return (
    <View style={styles1.view}>
      <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages, phoneNumber, friendName, friendPhoneNumber)}
          isLoadingEarlier={true}
          renderUsernameOnMessage={true}
          showUserAvatar={true}
          placeholder={"Chat Away..."}
          renderInputToolbar={props => customtInputToolbar(props)}
          user={{
              _id: auth?.currentUser?.uid,
              avatar: imageURL
          }}
      />
    </View>
  );
}

const styles1 = StyleSheet.create({
  view:{
    backgroundColor: Colors.Primary,
    flex:1
  }
});

export default ChatScreen