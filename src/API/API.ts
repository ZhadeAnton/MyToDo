import firebase from 'firebase'
import { db } from '../Firebase/Firebase.config';
import { v4 } from 'uuid'
import { ITodoList } from '../Interfaces/interfaces';
import { IUser } from '../Redux/User/userInterfaces';
import { getUserFromId } from './APIUtils';

export function getLists(userId: IUser['id']) {
  return getUserFromId(userId)
      .then((user) => user.lists)
      .catch((error) => console.log(error))
}

export function getTodos(userId: IUser['id']) {
  return getUserFromId(userId)
      .then((user) => user.todos)
      .catch((error) => console.log(error))
}

export function getListTodos(userId: IUser['id'], listId: ITodoList['id']) {
  return getUserFromId(userId)
      .then((user) => user.lists.filter((list: ITodoList) => list.id === listId))
      .catch((error) => console.log(error))
}

export function createTodo(userId: IUser['id'], data: {}) {
  return db.collection('users')
      .doc(userId)
      .update({
        todos: firebase.firestore.FieldValue.arrayUnion({
          id: v4(),
          ...data
        })
      })
      .then(() => ({...data}))
      .catch((error) => console.log(error))
}

export function createList(userId: IUser['id'], title: string) {
  return db.collection('users')
      .doc(userId)
      .update({
        lists: firebase.firestore.FieldValue.arrayUnion({
          userId,
          title,
          id: v4()
        })
      })
      .then(() => ({userId, title, id: v4()}))
      .catch((error) => console.log(error))
}

export function updateTodo(todoId: string, data: {}) {
  return db.collection('users')
      .doc(todoId)
      .update(data)
      .then(() => ({
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

export function deleteList(listId: string) {
  return db.collection('lists')
      .doc(listId)
      .delete()
      .then(() => listId)
      .catch((error) => console.log(error))
}
