import * as actions from './todoActionTypes'
import {VISIBILITY_FILTERS} from './todoConstants'

const INITIAL_STATE = VISIBILITY_FILTERS.ALL

const visibilityFilterReducer = (
    state = INITIAL_STATE,
    action: actions.TodoTypes) => {
  switch (action.type) {
    case actions.SET_FILTER: {
      return action.payload
    }
    default: {
      return state;
    }
  }
}

export default visibilityFilterReducer
