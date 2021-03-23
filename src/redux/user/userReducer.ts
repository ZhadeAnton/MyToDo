import {IUser} from './userInterfaces'
import * as actions from './userActionTypes'

export interface UserState {
  currentUser?: IUser | undefined,
  error?: string | null
}

const INITIAL_STATE: UserState = {
  currentUser: undefined,
  error: null
}

const userReducer =
(state: UserState = INITIAL_STATE, action: actions.UserTypes): UserState => {
  switch (action.type) {
    case actions.EMAIL_SIGN_IN_START:
      return {
        ...state,
        error: null
      }

    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }

    case actions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: undefined,
        error: null
      }

    case actions.SIGN_IN_FAILURE:
    case actions.SIGN_UP_FAILURE:
    case actions.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}

export default userReducer
