import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCjOZASk_FLww7n68LKoF2UN0v5QytbfbA',
  authDomain: 'mytodo-fa39e.firebaseapp.com',
  projectId: 'mytodo-fa39e',
  storageBucket: 'mytodo-fa39e.appspot.com',
  messagingSenderId: '6279358937',
  appId: '1:6279358937:web:9e78a39b73e6efc13411c8',
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const db = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
