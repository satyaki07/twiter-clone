// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy-NXQY6XIWIU0vo81HKJ3SFabrpserp8",
  authDomain: "twitter-clone-d73d0.firebaseapp.com",
  projectId: "twitter-clone-d73d0",
  storageBucket: "twitter-clone-d73d0.appspot.com",
  messagingSenderId: "884715747178",
  appId: "1:884715747178:web:67f04773afe12f36a99713",
  measurementId: "G-S3K6WTCK64",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
