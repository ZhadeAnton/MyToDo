import { ArrayOfTodoLists } from './../../Interfaces/interfaces';
import { db } from '../../Firebase/Firebase.config'
import { ArrayOfTodos } from '../../Interfaces/interfaces'

export const creacteUserProfileDocument = async (
    userAuth: {[key: string]: string}, additionalData: {}) => {
  if (!userAuth) return

  const userRef = db.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email, uid, photoURL} = userAuth
    const createAt = new Date()
    const todos: ArrayOfTodos = []
    const lists: ArrayOfTodoLists = []

    try {
      await userRef.set({
        displayName,
        email,
        uid,
        photoURL,
        createAt,
        todos,
        lists,
        ...additionalData,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return userRef;
}
