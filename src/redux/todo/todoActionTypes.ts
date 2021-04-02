export const ADD_TODO = 'ADD_TODO'
export interface AddTodo {
  type: typeof ADD_TODO,
  payload: string
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export interface ToggleTodo {
  type: typeof TOGGLE_TODO,
  payload: number
}

export const DELETE_TODO = 'DELETE_TODO'
export interface DeleteTodo {
  type: typeof DELETE_TODO,
  payload: number
}

export const SET_FILTER = 'SET_FILTER'
export interface SetFilter {
  type: typeof SET_FILTER,
  payload: string
}

export type TodoTypes =
| AddTodo
| ToggleTodo
| DeleteTodo
| SetFilter
