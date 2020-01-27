import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDerkk8bqe8kR5V9TjyDOMbtzkh0LL70vw",
    authDomain: "crw-clothing-5fa21.firebaseapp.com",
    databaseURL: "https://crw-clothing-5fa21.firebaseio.com",
    projectId: "crw-clothing-5fa21",
    storageBucket: "crw-clothing-5fa21.appspot.com",
    messagingSenderId: "939497052535",
    appId: "1:939497052535:web:06349d17b716eaf53e6972",
    measurementId: "G-HX44HFZSLM"
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
