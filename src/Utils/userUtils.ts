import { db } from '../Firebase/Firebase.config'
import { ArrayOfTodoLists } from '../Interfaces/TodoInterfaces';
import { ArrayOfTodos } from '../Interfaces/TodoInterfaces'

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
        id: uid,
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
