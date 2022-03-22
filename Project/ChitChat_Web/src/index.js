import * as bootstrap from 'bootstrap';
import { auth, app } from "../src/firebase.js";
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from "../node_modules/@firebase/auth";

const alertCodeFailed = document.getElementById("alertCodeFailed");
const btnOTP = document.getElementById("btnOTP");
const btnLogin = document.getElementById("btnLogin");
const OTPContainer = document.getElementById("otpContainer");
const phoneInputGroup = document.getElementById("phoneInputGroup");
const recaptcha = document.getElementById("recaptcha-container")
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

const sendOTP = () => {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        const sentCodeID = confirmationResult.verificationId;
        OTPContainer.style.display = "block";
        recaptcha.style.display = "none";
        btnLogin.addEventListener('click', () => signIn(sentCodeID));
    }).catch((error) => {
        alertCodeFailed.style.display = "block";
        console.log(error);
    });
}

const signIn = sentCodeID => {
    const code = document.getElementById("OTP").value;
    const credential = PhoneAuthProvider.credential(sentCodeID, code);
    signInWithCredential(auth, credential)
    .then(() => {
        window.location.href = "./profile.html";
        return false;
        // alert("Code verified!🥳")
    })
    .catch(error)(() => {
        console.log(error)
    });
}

btnOTP.addEventListener('click', () => sendOTP());