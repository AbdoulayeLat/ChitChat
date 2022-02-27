// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK9o-m9i97W--01XikQipHNUV4EQfdIM8",
  authDomain: "chit-cae27.firebaseapp.com",
  projectId: "chit-cae27",
  storageBucket: "chit-cae27.appspot.com",
  messagingSenderId: "749327233673",
  appId: "1:749327233673:web:f182f17c238213d4320c58",
  measurementId: "G-WT8ML4X9HT"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}
const auth = firebase.auth;

export {auth};