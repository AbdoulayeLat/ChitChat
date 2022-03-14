/* global grecaptcha */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, RecaptchaVerifier, grecaptcha, signInWithPhoneNumber} from "firebase/auth";
import { Modal } from "bootstrap";

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

var alertPlaceholder = document.getElementById('OtpAlert');

// Shows an alert to confirm that the code has been sent
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-primary bg.secondary' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
var OTPModal = new Modal(document.getElementById("OTPModal"), {});
 
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});

var loginButton = document.getElementById("btnLogin");

// Opens the One-Time-Password Window
document.getElementById("btnOTP").onclick = () => {
  var phoneNumber = document.getElementById("phoneNumber").value;
  const appVerifier = window.recaptchaVerifier;
  var alertPlaceholder = document.getElementById('OtpAlert'); // Alert for when message has been sent
  const code = $('input[id="userOTP"]').val();
  
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      OTPModal.show();
      loginButton.addEventListener('click', () => 
        confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          alert("Code has been confirmed", "success");
        }).catch((error) => {
          console.log(error);
          alert("Code has been confirmed", "succes")
        }).catch((error) => {
          console.log(error);
        }),
      );
    })
    .catch((error) => {
      console.log(error);
      window.recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaVerifier.reset(widgetId);
      });    
   });
}

