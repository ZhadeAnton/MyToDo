import * as actions from './todoActionTypes'

export interface TodoState {
  allIds: Array<number>,
  byIds: any
}

const INITIAL_STATE: TodoState = {
  allIds: [],
  byIds: {}
}

const todoReducer = (
    state = INITIAL_STATE,
    action: actions.TodoTypes): TodoState => {
  switch (action.type) {
    case actions.ADD_TODO: {
      const {id, title} = action.payload
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {...state.byIds,
          [id]: {
            title,
            completed: false
          }}
      }
    }

    case actions.TOGGLE_TODO: {
      const id = action.payload
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      }
    }

    case actions.DELETE_TODO: {
      const id = action.payload
      return {
        ...state,
        allIds: state.allIds.filter((todoId) => todoId !== id)
      }
    }

    default:
      return state;
  }
}

export default todoReducer
