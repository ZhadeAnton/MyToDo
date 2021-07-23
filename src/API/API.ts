import { ITodoList, IAddTodoStep } from './../Interfaces/TodoInterfaces';
import { db } from '../Firebase/Firebase.config';
import { chunk } from 'lodash';
import firebase from 'firebase'

import { ITodo } from '../Interfaces/TodoInterfaces';
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

export function createTodo(userId: IUser['id'], data: {}) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .add({...data})
      .then((docRef) => docRef.get())
      .then(getDocsWithId)
      .catch((error) => console.log(error))
}

export function createList(userId: IUser['id'], title: string) {
  return db.collection('users')
      .doc(userId)
      .collection('lists')
      .add({userId, title})
      .then((docRef) => docRef.get())
      .then(getDocsWithId)
      .catch((error) => console.log(error))
}

export function addTodoStep(userId: IUser['id'],
    todoId: ITodo['id'], step: IAddTodoStep) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .doc(todoId)
      .update({
        steps: firebase.firestore.FieldValue.arrayUnion({...step})
      })
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

export function deleteTodo(userId: IUser['id'], todoId: ITodo['id']) {
  return db.collection('users')
      .doc(userId)
      .collection('todos')
      .doc(todoId)
      .delete()
      .then(() => todoId)
      .catch((error) => console.log(error))
}

export function deleteList(userId: IUser['id'], listId: ITodoList['id']) {
  return db.collection('users')
      .doc(userId)
      .collection('lists')
      .doc(listId)
      .delete()
      .then(() => listId)
      .catch((error) => console.log(error))
}

export async function deleteListTodos(userId: IUser['id'], listId: ITodoList['id']) {
  const todosByListId = await db.collection('users')
      .doc(userId)
      .collection('todos')
      .where('listId', '==', `${listId}`)
      .get()

  const batches = chunk(todosByListId.docs, 500)
  const commitBatchPromises: Array<Promise<any>> = []

  batches.forEach((batch) => {
    const writeBatch = db.batch()
    batch.forEach((doc) => writeBatch.delete(doc.ref))
    commitBatchPromises.push(writeBatch.commit())
  })

  await Promise.all(commitBatchPromises);
}
