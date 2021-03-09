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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(err) {
        console.log(`error creating user : ${err.message}`);
      }
    }

    return userRef;
  }

  export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
   
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();

      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  }

  export const convertCollectionSnapshotToMap = collectionSnapshot => {
    const transformedCollection = collectionSnapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();

      return {
        routeName : encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      }
    })

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();
  
  var provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
