import * as actions from './errorActionTypes'

export interface ErrorState {
  userError: string | null
}

const INITIAL_STATE: ErrorState = {
  userError: null
}

const errorReducer =
(state: ErrorState = INITIAL_STATE, action: actions.ErrorTypes): ErrorState => {
  switch (action.type) {
    case actions.SIGN_IN_FAILURE:
    case actions.SIGN_UP_FAILURE:
    case actions.SIGN_OUT_FAILURE:
      return {
        ...state,
        userError: action.payload
      }

    default:
      return state
  }
}

export default errorReducer

