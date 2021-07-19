import { auth, db } from '../../Firebase/Firebase.config'

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
    const {displayName, email, uid, photoURL} = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        uid,
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
