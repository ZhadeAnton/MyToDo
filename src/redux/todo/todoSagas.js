import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './todoActionCreators'
import * as actionTypes from './todoActionTypes'
import * as api from '../../api'

export function* getTodos({payload}) {
  try {
    const todos = yield call(api.fetchListTodos, payload)
    yield put(actionCreators.getListTodosSuccess(todos))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* getLists() {
  try {
    const lists = yield api.fetchLists()
    yield put(actionCreators.getListsSuccess(lists))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* createTodo({payload: {title, listId}}) {
  try {
    const data = {title, listId}
    const newTodo = yield call(api.fetchCreateTodo, data)
    yield put(actionCreators.createTodoSuccess(newTodo))
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
