import {IUser} from './userInterfaces'
import * as actions from './userActionTypes'

export interface UserState {
  currentUser?: IUser | undefined,
  error?: string | null,
  isLoading: boolean
}

const INITIAL_STATE: UserState = {
  currentUser: undefined,
  isLoading: false,
  error: null
}

const userReducer =
(state: UserState = INITIAL_STATE, action: actions.UserTypes): UserState => {
  switch (action.type) {
    case actions.EMAIL_SIGN_IN_START:
    case actions.GOOGLE_SIGN_IN_START:
    case actions.FACEBOOK_SIGN_IN_START:
    case actions.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
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
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default userReducer
