import { db } from './firebase.config';

export function getLists() {
  return db.collection('lists')
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

export function getListsTodos(listId: string) {
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

export function createTodo(data: {}) {
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

export function updateTodo(todoId: string, data: {}) {
  return db.collection('todos')
      .doc(todoId)
      .update(data)
      .then(() => ({
        id: todoId,
        ...data
      }))
}

export function deleteTodo(todoId: string) {
  return db.collection('todos')
      .doc(todoId)
      .delete()
      .then(() => todoId)
      .catch((error) => console.log(error))
}
