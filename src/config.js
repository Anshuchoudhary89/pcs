import * as firebase from 'firebase'; 
//import 'firebase/firestore';
import '@firebase/firestore';
//import { firebaseConfig } from './config' 

// const admin = require('firebase-admin');
// const functions = require('firebase-functions');
// admin.initializeApp(functions.config().firebase);
var firebaseConfig  = {
  apiKey: 'AIzaSyBp35vVBRUDLO5MjCBEcKtsMB2tT7Ql66A',
  authDomain: 'https://cwcapp-f873c.firebaseapp.com',
  databaseURL: 'cwcapp-f873c.firebaseio.com',
  projectId: 'cwcapp-f873c',
  storageBucket: 'cwcapp-f873c.appspot.com',
  //messagingSenderId: '485822044905'
  //,appId: "1:510627847114:web:d8d41e96a8e78ee4"
};
firebase.initializeApp(firebaseConfig);
//let app = firebase.initializeApp(config);
//let db = admin.firestore();
export const db = firebase.firestore();