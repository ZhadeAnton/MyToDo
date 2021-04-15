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

      // case actions.DELETE_TODO:
      //   return {
      //     ...state,
      // eslint-disable-next-line max-len
      //     todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)]
      //   }

    default:
      return state
  }
}

export default todoReducer
