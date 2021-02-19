import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDPpfSbiNIt_fDIG3ZD2qBGNnI0URyrv2E",
    authDomain: "crwn-db-de4c9.firebaseapp.com",
    projectId: "crwn-db-de4c9",
    storageBucket: "crwn-db-de4c9.appspot.com",
    messagingSenderId: "54557182358",
    appId: "1:54557182358:web:f02cdbc5666d1d8c0eb5b7",
    measurementId: "G-7MBCBJQD4B"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
