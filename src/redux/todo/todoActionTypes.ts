import { ICreateTodo, ITodo, ITodoList } from '../../interfaces'

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
  type: typeof GET_LISTS
}

export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS'
export interface GetListsSuccess {
  type: typeof GET_LISTS_SUCCESS,
  payload: Array<ITodoList>
}

export const CREATE_TODO = 'CREATE_TODO'
export interface CreateTodo {
  type: typeof CREATE_TODO,
  payload: ICreateTodo
}

export const UPDATE_TODO = 'UPDATE_TODO'
export interface UpdateTodo {
  type: typeof UPDATE_TODO,
  payload: {
    todoId: string,
    data: {}
  }
}

export const DELETE_TODO = 'DELETE_TODO'
export interface DeleteTodo {
  type: typeof DELETE_TODO,
  payload: ITodo
}

export const TODOS_FAILURE = 'TODOS_FAILURE'
export interface TodosFailure {
  type: typeof TODOS_FAILURE,
  payload: string
}

export type TodoTypes =
| GetListTodos
| GetListTodosSuccess
| GetLists
| GetListsSuccess
| CreateTodo
| UpdateTodo
| DeleteTodo
| TodosFailure
