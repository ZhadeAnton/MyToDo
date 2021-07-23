import { ITodoList } from './../Interfaces/TodoInterfaces';
import { db } from '../Firebase/Firebase.config';
import { ITodo } from '../Interfaces/TodoInterfaces';
import { IUser } from '../Interfaces/UserInterfaces';
import { getDocsWithId, getFromSnapshot } from './APIUtils';
import { chunk } from 'lodash'
import firestore from 'firebase'

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

  const MAX_WRITES_PER_BATCH = 500

  const batches = chunk(todosByListId.docs, MAX_WRITES_PER_BATCH)
  const commitBatchPromises: any = []

  batches.forEach((batch) => {
    const writeBatch = db.batch()
    batch.forEach((doc) => writeBatch.delete(doc.ref))
    commitBatchPromises.push(writeBatch.commit())
  })

  await Promise.all(commitBatchPromises);
}
