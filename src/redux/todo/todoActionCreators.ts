import { ICreatedTodo, ITodo, ITodoList } from '../../interfaces'
import * as actions from './todoActionTypes'

export const getAllTodos = (userId: string): actions.GetAllTodos => ({
  type: actions.GET_ALL_TODOS,
  payload: userId
})

export const getAllTodosSuccess = (
    todos: Array<ITodo>): actions.GetAllTodosSuccess => ({
  type: actions.GET_ALL_TODOS_SUCCESS,
  payload: todos
})

export const getListTodos = (listId: string): actions.GetListTodos => ({
  type: actions.GET_LIST_TODOS,
  payload: listId
})

export const getListTodosSuccess = (
    todos: Array<ITodo>): actions.GetListTodosSuccess => ({
  type: actions.GET_LIST_TODOS_SUCCESS,
  payload: todos
})

export const getLists = (userId: string): actions.GetLists => ({
  type: actions.GET_LISTS,
  payload: userId
})

export const getListsSuccess = (
    lists: Array<ITodoList>): actions.GetListsSuccess => ({
  type: actions.GET_LISTS_SUCCESS,
  payload: lists
})

export const createTodo = ({
  title,
  listId,
  userId
}: ICreatedTodo): actions.CreateTodo => ({
  type: actions.CREATE_TODO,
  payload: { title, listId, userId, }
})

export const createTodoSuccess = (
    newTodo: ITodo): actions.CreateTodoSuccess => ({
  type: actions.CREATE_TODO_SUCCESS,
  payload: newTodo
})

export const createList = (
    userId: string, title: string): actions.CreateList => ({
  type: actions.CREATE_LIST,
  payload: { userId, title }
})

export const createListSuccess = (
    {title, id, userId}: ITodoList): actions.CreateListSuccess => ({
  type: actions.CREATE_LIST_SUCCESS,
  payload: { title, id, userId }
})

export const updateTodo = (todoId: string, data: {}): actions.UpdateTodo => ({
  type: actions.UPDATE_TODO,
  payload: { todoId, data }
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

export const deleteList = (listId: string): actions.DeleteList => ({
  type: actions.DELETE_LIST,
  payload: listId
})

export const deleteListSuccess = (
    listId: string): actions.DeleteListSuccess => ({
  type: actions.DELETE_LIST_SUCCESS,
  payload: listId
})

export const todosFailure = (error: string): actions.TodosFailure => ({
  type: actions.TODOS_FAILURE,
  payload: error
})
