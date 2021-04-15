import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './todoActionCreators'
import * as actionTypes from './todoActionTypes'
import * as api from '../../api'

export function* getTodos(listId) {
  try {
    const todos = yield api.fetchListTodos(listId)
    yield put(actionCreators.getListTodosSuccess(todos))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* getLists() {
  try {
    yield console.log('fetche for lists')
    const lists = yield api.fetchLists()
    yield put(actionCreators.getListsSuccess(lists))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* createTodo(data) {
  try {
    const newTodo = yield api.fetchCreateTodo(data)
    yield put(actionCreators.createTodo(newTodo))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* deleteTodo(todoId) {
  try {
    const todo = yield api.fetchDeleteTodo(todoId)
    yield put(actionCreators.deleteTodo(todo))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

function* onGetListTodos() {
  yield takeLatest(actionTypes.GET_LIST_TODOS, getTodos)
}

function* onGetLists() {
  yield takeLatest(actionTypes.GET_LISTS, getLists)
}

function* onCreateTodo() {
  yield takeLatest(actionTypes.CREATE_TODO, createTodo)
}

function* onDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO, deleteTodo)
}

export default function* todoSagas() {
  yield all([
    call(onGetListTodos),
    call(onGetLists),
    call(onCreateTodo),
    call(onDeleteTodo)
  ])
}
