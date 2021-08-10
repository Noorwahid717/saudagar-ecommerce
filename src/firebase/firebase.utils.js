import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDr6agQDRDwVR0KCLpWjA-XcV8-wiPpGTE",
    authDomain: "ecommerce-db-7578b.firebaseapp.com",
    projectId: "ecommerce-db-7578b",
    storageBucket: "ecommerce-db-7578b.appspot.com",
    messagingSenderId: "776122256111",
    appId: "1:776122256111:web:20b9a068b6835aae2da91a",
    measurementId: "G-NNL0R4Q8GT"
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
