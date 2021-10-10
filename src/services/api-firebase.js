import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = firebase.initializeApp(firebaseConfig);

const ApiFirebase = {

  googleLogar: async () => {
    if (app) {
      const provider = new firebase.auth.GoogleAuthProvider();
      let result = await firebase.auth().signInWithPopup(provider);
      return result;
    }
  }
}

export default ApiFirebase;