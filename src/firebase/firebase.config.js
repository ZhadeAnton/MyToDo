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

export const creacteUserProfileDocument =
  async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth
      const createAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData,
        })
      } catch (error) {
        console.error(error.message)
      }
    }
    return userRef;
  }

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
