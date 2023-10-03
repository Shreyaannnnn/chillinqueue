import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyB-Oyx4JW5ZxYiK7eywXDvtzi_31YBr808",
    authDomain: "flurtexpo.firebaseapp.com",
    projectId: "flurtexpo",
    storageBucket: "flurtexpo.appspot.com",
    messagingSenderId: "746846950632",
    appId: "1:746846950632:web:9ea234a0f85f5d86ece55d"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-Oyx4JW5ZxYiK7eywXDvtzi_31YBr808",
//   authDomain: "flurtexpo.firebaseapp.com",
//   projectId: "flurtexpo",
//   storageBucket: "flurtexpo.appspot.com",
//   messagingSenderId: "746846950632",
//   appId: "1:746846950632:web:9ea234a0f85f5d86ece55d"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);