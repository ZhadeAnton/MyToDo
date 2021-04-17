import { auth, db } from '../../firebase.config'

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const creacteUserProfileDocument = async (
    userAuth: {[key: string]: string}, additionalData: {}) => {
  if (!userAuth) return

  const userRef = db.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email, photoURL} = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.error(error.message)
    }
  }
  return userRef;
}
