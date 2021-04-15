import { ICreateTodo, ITodo, ITodoList } from '../../interfaces'
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
    {title, listId}: ICreateTodo): actions.CreateTodo => ({
  type: actions.CREATE_TODO,
  payload: {title, listId}
})

export const updateTodo = (todoId: string, data: {}): actions.UpdateTodo => ({
  type: actions.UPDATE_TODO,
  payload: {
    todoId,
    data
  }
})

export const deleteTodo = (todo: ITodo): actions.DeleteTodo => ({
  type: actions.DELETE_TODO,
  payload: todo
})

export const todosFailure = (error: string): actions.TodosFailure => ({
  type: actions.TODOS_FAILURE,
  payload: error
})
