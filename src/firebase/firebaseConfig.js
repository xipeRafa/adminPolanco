
//Inicializacion de Firebase/Firestore
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore'



//require("dotenv").config()


const app = firebase.initializeApp({

     apiKey: "AIzaSyAp9XrnMQ2kd-L8I2kVOZJctYBAT-h66tM",
  authDomain: "polanco-25ef9.firebaseapp.com",
  projectId: "polanco-25ef9",
  storageBucket: "polanco-25ef9.appspot.com",
  messagingSenderId: "804200542961",
  appId: "1:804200542961:web:010ee2a2d4e45ec098af50"
  

});



/*
se.firestore().doc();
getDoc(docRef); */


const db = getFirestore(app)
export default db