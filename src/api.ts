import { db } from './firebase.config';

export function fetchLists(userId: string) {
  return db.collection('lists')
      .where('userId', '==', `${userId}`)
      .get()
      .then(getFromSnapshot)
      .catch((error) => console.log(error))
}

export function fetchTodos(userId: string) {
  return db.collection('todos')
      .where('userId', '==', `${userId}`)
      .get()
      .then(getFromSnapshot)
      .catch((error) => console.log(error))
}

export function fetchListTodos(listId: string) {
  return db.collection('todos')
      .where('listId', '==', `${listId}`)
      .get()
      .then(getFromSnapshot)
      .catch((error) => console.log(error))
}

export function fetchCreateTodo(data: {}) {
  return db.collection('todos')
      .add({
        ...data,
      })
      .then((docRef) => docRef.get())
      .then(getFromDoc)
      .catch((error) => console.log(error))
}

export function fetchCreateList(data: {}) {
  return db.collection('lists')
      .add({
        ...data
      })
      .then((docRef) => docRef.get())
      .then(getFromDoc)
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

export function fetchDeleteList(listId: string) {
  return db.collection('lists')
      .doc(listId)
      .delete()
      .then(() => listId)
      .catch((error) => console.log(error))
}

function getFromSnapshot(snapShot: any) {
  return snapShot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data()
  }))
}

function getFromDoc(doc: any) {
  return ({
    id: doc.id,
    ...doc.data()
  })
}
