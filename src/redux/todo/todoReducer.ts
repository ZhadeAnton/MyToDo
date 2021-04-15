import { ITodo, ITodoList } from '../../interfaces'
import * as actions from './todoActionTypes'

export interface TodoState {
  todos: Array<ITodo>,
  lists: Array<ITodoList>
}

const INITIAL_STATE: TodoState = {
  todos: [],
  lists: []
}

const todoReducer =
(state = INITIAL_STATE, action: actions.TodoTypes): TodoState => {
  switch (action.type) {
    case actions.GET_LIST_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload]
      }

    case actions.GET_LISTS_SUCCESS:
      return {
        ...state,
        lists: [...state.lists, ...action.payload]
      }

    case actions.CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case actions.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
      }

    case actions.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload
            }
          }

          return todo
        })]
      }

    default:
      return state
  }
}

export default todoReducer
