import * as actions from './todoActionTypes'

export const addTodo = (title: string): actions.AddTodo => ({
  type: actions.ADD_TODO,
  payload: {
    id: Number(new Date()),
    title,
  }
})

export const toggleTodo = (id: number): actions.ToggleTodo => ({
  type: actions.TOGGLE_TODO,
  payload: id
})

export const deleteTodo = (id: number): actions.DeleteTodo => ({
  type: actions.DELETE_TODO,
  payload: id
})

export const setFilter = (filter: string) => ({
  type: actions.SET_FILTER,
  payload: filter
})
