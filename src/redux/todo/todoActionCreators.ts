import * as interfaces from '../../Interfaces/interfaces'
import { IUser } from '../User/userInterfaces'
import * as actions from './todoActionTypes'

export const getAllTodos = (userId: IUser['id']): actions.GetAllTodos => ({
  type: actions.GET_ALL_TODOS,
  payload: userId
})

export const getAllTodosSuccess: interfaces.IFnGetAllTodosSuccess = (todos)
  : actions.GetAllTodosSuccess => ({
  type: actions.GET_ALL_TODOS_SUCCESS,
  payload: todos
})

export const getListTodos: interfaces.IFnGetListTodos = (listId)
  : actions.GetListTodos => ({
  type: actions.GET_LIST_TODOS,
  payload: listId
})

export const getListTodosSuccess: interfaces.IFnGetListTodosSuccess = (todos)
  : actions.GetListTodosSuccess => ({
  type: actions.GET_LIST_TODOS_SUCCESS,
  payload: todos
})

export const getLists: interfaces.IFnGetLists = (userId): actions.GetLists => ({
  type: actions.GET_LISTS,
  payload: userId
})

export const getListsSuccess: interfaces.IFnGetListsSuccess = (lists)
  : actions.GetListsSuccess => ({
  type: actions.GET_LISTS_SUCCESS,
  payload: lists
})

export const createTodo: interfaces.IFnCreateTodo = ({title, listId, userId})
  : actions.CreateTodo => ({
  type: actions.CREATE_TODO,
  payload: { title, listId, userId, }
})

export const createTodoSuccess: interfaces.IFnCreateTodoSuccess = (newTodo)
  : actions.CreateTodoSuccess => ({
  type: actions.CREATE_TODO_SUCCESS,
  payload: newTodo
})

export const createList: interfaces.IFnCreateList = (userId, title)
  : actions.CreateList => ({
  type: actions.CREATE_LIST,
  payload: { userId, title }
})

export const createListSuccess: interfaces.IFnCreateListSuccess = ({title, id, userId})
  : actions.CreateListSuccess => ({
  type: actions.CREATE_LIST_SUCCESS,
  payload: { title, id, userId }
})

export const selectTodo: interfaces.IFnSelectTodo = (todo): actions.SelectTodo => ({
  type: actions.SELECT_TODO,
  payload: todo
})

export const changeTitleSelectedTodo: interfaces.IFnChangeTitleSelectedTodo = (title)
  : actions.ChangeTitleSelectedTodo => ({
  type: actions.CHANGE_TITLE_SELECTED_TODO,
  payload: title
})

export const setDateSelectedTodo: interfaces.IFnSetDateSelectedTodo = (date)
  : actions.SetDateSelectedTodo => ({
  type: actions.SET_DATE_SELECTED_TODO,
  payload: date
})

export const removeDateSelectedTodo: interfaces.IFnRemoveDateSelectedTodo = ()
  : actions.RemoveDateSelectedTodo => ({
  type: actions.REMOVE_DATE_SELECTED_TODO
})

export const closeSelectedTodo: interfaces.IFnCloseSelectedTodo = ()
  : actions.CloseSelectedTodo => ({
  type: actions.CLOSE_SELECTED_TODO
})

export const updateTodo: interfaces.IFnUpdateTodo = (todoId, data)
  : actions.UpdateTodo => ({
  type: actions.UPDATE_TODO,
  payload: { todoId, data }
})

export const updateTodoSuccess: interfaces.IFnUpdateTodoSuccess = (updatedTodo)
  : actions.UpdateTodoSuccess => ({
  type: actions.UPDATE_TODO_SUCCESS,
  payload: updatedTodo
})

export const addTodoStep: interfaces.IFnAddTodoStep = (todoId, stepTitle)
  : actions.AddTodoStep => ({
  type: actions.ADD_TODO_STEP,
  payload: { todoId, stepTitle: stepTitle }
})

export const deleteTodo: interfaces.IFnDeleteTodo = (todoId): actions.DeleteTodo => ({
  type: actions.DELETE_TODO,
  payload: todoId
})

export const deleteTodoSuccess = (
    todoId: string): actions.DeleteTodoSuccess => ({
  type: actions.DELETE_TODO_SUCCESS,
  payload: todoId
})

export const deleteTodoStep: interfaces.IFnDeleteTodoStep = (todoId, step)
  : actions.DeleteTodoStep => ({
  type: actions.DELETE_TODO_STEP,
  payload: { todoId, step }
})

export const deleteList: interfaces.IFnDeleteList = (listId): actions.DeleteList => ({
  type: actions.DELETE_LIST,
  payload: listId
})

export const deleteListSuccess: interfaces.IFnDeleteListSuccess = (listId)
  : actions.DeleteListSuccess => ({
  type: actions.DELETE_LIST_SUCCESS,
  payload: listId
})

export const todosFailure: interfaces.IFnTodosFailure = (error)
  : actions.TodosFailure => ({
  type: actions.TODOS_FAILURE,
  payload: error
})
