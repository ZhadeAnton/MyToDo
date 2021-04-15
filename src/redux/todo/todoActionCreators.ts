import { ITodo, ITodoList } from '../../interfaces'
import * as actions from './todoActionTypes'

export const getListTodos = (listId: string): actions.GetListTodos => ({
  type: actions.GET_LIST_TODOS,
  payload: listId
})

export const getListTodosSuccess = (
    todos: Array<ITodo>): actions.GetListTodosSuccess => ({
  type: actions.GET_LIST_TODOS_SUCCESS,
  payload: todos
})

export const getLists = (): actions.GetLists => ({
  type: actions.GET_LISTS
})

export const getListsSuccess = (
    lists: Array<ITodoList>): actions.GetListsSuccess => ({
  type: actions.GET_LISTS_SUCCESS,
  payload: lists
})

export const createTodo = (
    title: string, listId: string): actions.CreateTodo => ({
  type: actions.CREATE_TODO,
  payload: {
    title,
    listId
  }
})

export const createTodoSuccess = (
    newTodo: ITodo): actions.CreateTodoSuccess => ({
  type: actions.CREATE_TODO_SUCCESS,
  payload: newTodo
})

export const updateTodo = (todoId: string, data: {}): actions.UpdateTodo => ({
  type: actions.UPDATE_TODO,
  payload: {
    todoId,
    data
  }
})

export const updateTodoSuccess = (
    updatedTodo: ITodo): actions.UpdateTodoSuccess => ({
  type: actions.UPDATE_TODO_SUCCESS,
  payload: updatedTodo
})

export const deleteTodo = (todoId: string): actions.DeleteTodo => ({
  type: actions.DELETE_TODO,
  payload: todoId
})

export const deleteTodoSuccess = (
    todoId: string): actions.DeleteTodoSuccess => ({
  type: actions.DELETE_TODO_SUCCESS,
  payload: todoId
})

export const todosFailure = (error: string): actions.TodosFailure => ({
  type: actions.TODOS_FAILURE,
  payload: error
})
