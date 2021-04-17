import { db } from './firebase.config';

export function fetchLists(userId: string) {
  return db.collection('lists')
      .where('userId', '==', `${userId}`)
      .get()
      .then((snapShot) => {
        const items = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        return items
      })
      .catch((error) => console.log(error))
}

export function fetchListTodos(listId: string) {
  return db.collection('todos')
      .where('listId', '==', `${listId}`)
      .get()
      .then((snapShot) => {
        const items = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        return items
      })
      .catch((error) => console.log(error))
}

export function fetchCreateTodo(data: {}) {
  return db.collection('todos')
      .add({
        ...data,
        completed: false
      })
      .then((docRef) => docRef.get())
      .then((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      .catch((error) => console.log(error))
}

export function fetchUpdateTodo(todoId: string, data: {}) {
  return db.collection('todos')
      .doc(todoId)
      .update(data)
      .then(() => ({
        id: todoId,
        ...data
      }))
}

export function fetchDeleteTodo(todoId: string) {
  return db.collection('todos')
      .doc(todoId)
      .delete()
      .then(() => todoId)
      .catch((error) => console.log(error))
}
