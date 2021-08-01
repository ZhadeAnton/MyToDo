import * as interfaces from '../../Interfaces/TodoInterfaces'
import { IUser } from '../../Interfaces/UserInterfaces'
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

export const updateTodo: interfaces.IFnUpdateTodo = (userId, todoId, data)
  : actions.UpdateTodo => ({
  type: actions.UPDATE_TODO,
  payload: { userId, todoId, data }
})

export const updateTodoSuccess: interfaces.IFnUpdateTodoSuccess = (updatedTodo)
  : actions.UpdateTodoSuccess => ({
  type: actions.UPDATE_TODO_SUCCESS,
  payload: updatedTodo
})

export const addTodoStep: interfaces.IFnAddTodoStep = (userId, todoId, step)
  : actions.AddTodoStep => ({
  type: actions.ADD_TODO_STEP,
  payload: { userId, todoId, step }
})

export const deleteTodo: interfaces.IFnDeleteTodo = (userId, todoId)
  : actions.DeleteTodo => ({
  type: actions.DELETE_TODO,
  payload: { userId, todoId }
})

export const deleteTodoSuccess = (todoId: interfaces.ITodo['id'])
  : actions.DeleteTodoSuccess => ({
  type: actions.DELETE_TODO_SUCCESS,
  payload: todoId
})

export const deleteTodoStep: interfaces.IFnDeleteTodoStep = (userId, todoId, step)
  : actions.DeleteTodoStep => ({
  type: actions.DELETE_TODO_STEP,
  payload: { userId, todoId, step }
})

export const deleteList: interfaces.IFnDeleteList = (userId, listId)
  : actions.DeleteList => ({
  type: actions.DELETE_LIST,
  payload: { userId, listId }
})

export const deleteListSuccess: interfaces.IFnDeleteListSuccess = (listId)
  : actions.DeleteListSuccess => ({
  type: actions.DELETE_LIST_SUCCESS,
  payload: listId
})

export const todoFailure: interfaces.IFnTodosFailure = ()
  : actions.TodosFailure => ({
  type: actions.TODO_FAILURE
})
