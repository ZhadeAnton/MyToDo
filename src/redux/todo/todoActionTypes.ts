import {
  IUpdatedTodo,
  ICreateList,
  ITodo,
  ITodoList,
  IAddTodoStep,
  IDeleteTodoStep
} from '../../interfaces'

export const GET_ALL_TODOS = 'GET_ALL_TODOS'
export interface GetAllTodos {
  type: typeof GET_ALL_TODOS,
  payload: string
}

export const GET_ALL_TODOS_SUCCESS = 'GET_ALL_TODOS_SUCCESS'
export interface GetAllTodosSuccess {
  type: typeof GET_ALL_TODOS_SUCCESS,
  payload: Array<ITodo>
}

export const GET_LIST_TODOS = 'GET_LIST_TODOS'
export interface GetListTodos {
  type: typeof GET_LIST_TODOS,
  payload: string
}

export const GET_LIST_TODOS_SUCCESS = 'GET_LIST_TODOS_SUCCESS'
export interface GetListTodosSuccess {
  type: typeof GET_LIST_TODOS_SUCCESS,
  payload: Array<ITodo>
}

export const GET_LISTS = 'GET_LISTS'
export interface GetLists {
  type: typeof GET_LISTS,
  payload: string
}

export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS'
export interface GetListsSuccess {
  type: typeof GET_LISTS_SUCCESS,
  payload: Array<ITodoList>
}

export const CREATE_TODO = 'CREATE_TODO'
export interface CreateTodo {
  type: typeof CREATE_TODO,
  payload: IUpdatedTodo
}

export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export interface CreateTodoSuccess {
  type: typeof CREATE_TODO_SUCCESS,
  payload: ITodo
}

export const CREATE_LIST = 'CREATE_LIST'
export interface CreateList {
  type: typeof CREATE_LIST,
  payload: ICreateList
}

export const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS'
export interface CreateListSuccess {
  type: typeof CREATE_LIST_SUCCESS,
  payload: ITodoList
}

export const SELECT_TODO = 'SELECT_TODO'
export interface SelectTodo {
  type: typeof SELECT_TODO,
  payload: ITodo
}

export const CLOSE_SELECTED_TODO = 'CLOSE_SELECTED_TODO'
export interface CloseSelectedTodo {
  type: typeof CLOSE_SELECTED_TODO
}

export const UPDATE_TODO = 'UPDATE_TODO'
export interface UpdateTodo {
  type: typeof UPDATE_TODO,
  payload: {
    todoId: string,
    data: {}
  }
}

export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export interface UpdateTodoSuccess {
  type: typeof UPDATE_TODO_SUCCESS,
  payload: ITodo
}

export const ADD_TODO_STEP = 'ADD_TODO_STEP'
export interface AddTodoStep {
  type: typeof ADD_TODO_STEP,
  payload: IAddTodoStep
}

export const DELETE_TODO = 'DELETE_TODO'
export interface DeleteTodo {
  type: typeof DELETE_TODO,
  payload: string
}

export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export interface DeleteTodoSuccess {
  type: typeof DELETE_TODO_SUCCESS,
  payload: string
}

export const DELETE_TODO_STEP = 'DELETE_TODO_STEP'
export interface DeleteTodoStep {
  type: typeof DELETE_TODO_STEP,
  payload: IDeleteTodoStep
}

export const DELETE_LIST = 'DELETE_LIST'
export interface DeleteList {
  type: typeof DELETE_LIST,
  payload: string
}

export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS'
export interface DeleteListSuccess {
  type: typeof DELETE_LIST_SUCCESS,
  payload: string
}

export const TODOS_FAILURE = 'TODOS_FAILURE'
export interface TodosFailure {
  type: typeof TODOS_FAILURE,
  payload: string
}

export type TodoTypes =
| GetAllTodos
| GetAllTodosSuccess
| GetListTodos
| GetLists
| CreateTodo
| CreateList
| SelectTodo
| CloseSelectedTodo
| UpdateTodo
| AddTodoStep
| DeleteTodo
| GetListTodosSuccess
| GetListsSuccess
| CreateTodoSuccess
| CreateListSuccess
| UpdateTodoSuccess
| DeleteTodoSuccess
| DeleteListSuccess
| DeleteList
| DeleteTodoStep
| TodosFailure
