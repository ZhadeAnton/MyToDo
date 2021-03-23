import {IUser, IError} from './userInterfaces'
import * as actions from './userActionTypes'

export interface UserState {
  currentUser?: IUser | undefined,
  error?: IError | undefined
}

const INITIAL_STATE: UserState = {
  currentUser: undefined,
  error: undefined
}

const userReducer =
(state: UserState = INITIAL_STATE, action: actions.UserTypes): UserState => {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: undefined
      }

    case actions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: undefined,
        error: undefined
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
