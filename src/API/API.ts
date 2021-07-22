import { db } from '../Firebase/Firebase.config';
import { v4 } from 'uuid'
import { ITodo, ITodoList } from '../Interfaces/TodoInterfaces';
import { IUser } from '../Interfaces/UserInterfaces';
import { getDocsWithId, getFromSnapshot } from './APIUtils';

export function getLists(userId: IUser['id']) {
  return db.collection('users')
      .doc(userId)
      .collection('lists')
      .get()
      .then(getFromSnapshot)
      .catch((error) => console.log(error))
}

export function getTodos(userId: IUser['id']) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .get()
      .then(getFromSnapshot)
      .catch((error) => console.log(error))
}

export function getListTodos(userId: IUser['id'], listId: ITodoList['id']) {
  return db.collection('users')
      .doc(userId)
      .collection('lists')
      .where('id', '==', `${listId}`)
      .get()
      .then((res) => console.log('res', res))
      .catch((error) => console.log(error))
}

export function createTodo(userId: IUser['id'], data: {}) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .add({
        ...data
      })
      .then((docRef) => docRef.get())
      .then(getDocsWithId)
      .catch((error) => console.log(error))
}

export function createList(userId: IUser['id'], title: string) {
  const uid = v4()

  return db.collection('users')
      .doc(userId)
      .collection('lists')
      .add({
        userId,
        title,
        id: uid
      })
      .then(() => ({userId, title, id: uid}))
      .catch((error) => console.log(error))
}

export function updateTodo(userId: IUser['id'], todoId: ITodo['id'], data: {}) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .doc(todoId)
      .update(data)
      .then(() => ({
        id: todoId,
        ...data
      }))
}

export function deleteTodo(userId: IUser['id'], todoId: string) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .doc(todoId)
      .delete()
      .then(() => todoId)
      .catch((error) => console.log(error))
}

export function deleteList(userId: IUser['id'], listId: string) {
  return db.collection('users')
      .doc(listId)
      .delete()
      .then(() => listId)
      .catch((error) => console.log(error))
}
