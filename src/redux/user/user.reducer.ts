import {IUser, IError} from './user-@types'
import * as actions from './userActionTypes'

export interface UserState {
  currentUser: null | IUser,
  error: null | IError
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action: actions.UserTypes) => {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }

    case actions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }

    case actions.SIGN_IN_FAILURE:
    case actions.SIGN_UP_FAILURE:
    case actions.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default userReducer
