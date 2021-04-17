import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './todoActionCreators'
import * as actionTypes from './todoActionTypes'
import * as api from '../../api'

export function* getTodos({payload: listId}) {
  try {
    const todos = yield call(api.fetchListTodos, listId)
    yield put(actionCreators.getListTodosSuccess(todos))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* getLists({payload: userId}) {
  try {
    yield console.log('SAGA TODO', userId)
    const lists = yield api.fetchLists(userId)
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

export function* updateTodo({payload: {todoId, data}}) {
  try {
    const newTodo = yield call(api.fetchUpdateTodo, todoId, data)
    yield put(actionCreators.updateTodoSuccess(newTodo))
  } catch (error) {
    yield put(actionCreators.todosFailure(error.message))
  }
}

export function* deleteTodo({payload}) {
  try {
    const todo = yield call(api.fetchDeleteTodo, payload)
    yield put(actionCreators.deleteTodoSuccess(todo))
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

function* onUpdateTodo() {
  yield takeLatest(actionTypes.UPDATE_TODO, updateTodo)
}

function* onDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO, deleteTodo)
}

export default function* todoSagas() {
  yield all([
    call(onGetListTodos),
    call(onGetLists),
    call(onCreateTodo),
    call(onUpdateTodo),
    call(onDeleteTodo)
  ])
}
