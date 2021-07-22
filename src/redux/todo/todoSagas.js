import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './todoActionCreators'
import * as actionTypes from './todoActionTypes'
import * as API from '../../API/API'
import firebase from 'firebase'

function* getTodos({payload: userId}) {
  try {
    const todos = yield call(API.getTodos, userId)
    yield put(actionCreators.getAllTodosSuccess(todos))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* getLists({payload: userId}) {
  try {
    const lists = yield API.getLists(userId)
    yield put(actionCreators.getListsSuccess(lists))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* createTodo({payload: {title, listId, userId}}) {
  try {
    const newTodo = yield call(API.createTodo, userId, {
      title,
      listId,
      userId,
      completed: false,
      important: false,
      timestamp: new Date(),
      planned: '',
      steps: []
    })
    yield put(actionCreators.createTodoSuccess(newTodo))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* createList({payload: {userId, title}}) {
  try {
    const newList = yield call(API.createList, userId, title)
    yield put(actionCreators.createListSuccess(newList))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* updateTodo({payload: {userId, todoId, data}}) {
  try {
    const newTodo = yield call(API.updateTodo, userId, todoId, data)
    yield put(actionCreators.updateTodoSuccess(newTodo))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* addTodoStep({payload: {todoId, stepTitle}}) {
  try {
    yield call(API.updateTodo, todoId, {
      steps: firebase.firestore.FieldValue.arrayUnion({stepTitle})})
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* deleteTodo({payload: {userId, todoId}}) {
  try {
    const deletedTodo = yield call(API.deleteTodo, userId, todoId)
    yield put(actionCreators.deleteTodoSuccess(deletedTodo))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* deleteList({payload: {userId, listId}}) {
  try {
    const deletedList = yield call(API.deleteList, userId, listId)
    yield put(actionCreators.deleteListSuccess(deletedList))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* deleteTodoStep({payload: {todoId, step}}) {
  try {
    yield call(API.updateTodo, todoId, {
      steps: firebase.firestore.FieldValue.arrayRemove(step)})
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* onGetTodos() {
  yield takeLatest(actionTypes.GET_ALL_TODOS, getTodos)
}

function* onGetLists() {
  yield takeLatest(actionTypes.GET_LISTS, getLists)
}

function* onCreateTodo() {
  yield takeLatest(actionTypes.CREATE_TODO, createTodo)
}

function* onCreatelist() {
  yield takeLatest(actionTypes.CREATE_LIST, createList)
}

function* onUpdateTodo() {
  yield takeLatest(actionTypes.UPDATE_TODO, updateTodo)
}

function* onAddTodoStep() {
  yield takeLatest(actionTypes.ADD_TODO_STEP, addTodoStep)
}

function* onDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO, deleteTodo)
}

function* onDeleteTodoStep() {
  yield takeLatest(actionTypes.DELETE_TODO_STEP, deleteTodoStep)
}

function* onDeleteList() {
  yield takeLatest(actionTypes.DELETE_LIST, deleteList)
}

export default function* todoSagas() {
  yield all([
    call(onGetTodos),
    call(onGetLists),
    call(onCreateTodo),
    call(onCreatelist),
    call(onUpdateTodo),
    call(onAddTodoStep),
    call(onDeleteTodo),
    call(onDeleteTodoStep),
    call(onDeleteList)
  ])
}
