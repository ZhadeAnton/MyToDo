import { ISelecteTodo, ITodo, ITodoList } from '../../interfaces'
import * as actions from './todoActionTypes'

export interface TodoState {
  todos: Array<ITodo>,
  lists: Array<ITodoList>,
  selectedTodo: ISelecteTodo | any
}

const INITIAL_STATE: TodoState = {
  todos: [],
  lists: [],
  selectedTodo: null
}

const todoReducer =
(state = INITIAL_STATE, action: actions.TodoTypes): TodoState => {
  switch (action.type) {
    case actions.GET_LIST_TODOS_SUCCESS:
    case actions.GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload]
      }

    case actions.GET_LISTS_SUCCESS:
      return {
        ...state,
        lists: [...action.payload]
      }

    case actions.CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case actions.CREATE_LIST_SUCCESS:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      }

    case actions.SELECT_TODO:
      return {
        ...state,
        selectedTodo: action.payload
      }

    case actions.CLOSE_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: null
      }

    case actions.ADD_TODO_STEP:
      return {
        ...state,
        todos: [...state.todos.map((todo) => {
          if (todo.id === action.payload.todoId) {
            todo.steps?.push({stepTitle: action.payload.stepTitle})
          }

          return todo
        })]
      }

    case actions.DELETE_TODO_STEP:
      return {
        ...state,
        todos: [...state.todos.map((todo) => {
          if (todo.id === action.payload.todoId) {
            return {
              ...todo,
              steps: todo.steps?.filter((step: any) =>
                step !== action.payload.step)
            }
          }

          return todo
        })],
        selectedTodo: {
          ...state.selectedTodo,
          steps: state.selectedTodo.steps.filter((step: any) => {
            return step !== action.payload.step
          })
        }
      }

    case actions.SET_DATE_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: {
          ...state.selectedTodo,
          planned: action.payload
        }
      }

    case actions.REMOVE_DATE_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: {
          ...state.selectedTodo,
          planned: ''
        }
      }

    case actions.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
      }

    case actions.DELETE_LIST_SUCCESS:
      return {
        ...state,
        lists: [...state.lists.filter((list) => list.id !== action.payload)]
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
