import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAte7cw9ciQgmXn5FpNf7qMvJ_3PLUGycQ",
    authDomain: "crwn-db-98a76.firebaseapp.com",
    databaseURL: "https://crwn-db-98a76.firebaseio.com",
    projectId: "crwn-db-98a76",
    storageBucket: "crwn-db-98a76.appspot.com",
    messagingSenderId: "840706520063",
    appId: "1:840706520063:web:e61a3069719e6be24fedca",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;