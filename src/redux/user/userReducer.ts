import {IUser} from './userInterfaces'
import * as UserActions from './userActionTypes'

export interface UserState {
  currentUser?: IUser | undefined,
  isLoading: boolean,
  userError: string | null
}

const INITIAL_STATE: UserState = {
  currentUser: undefined,
  isLoading: false,
  userError: null
}

const userReducer = (
    state: UserState = INITIAL_STATE,
    action: UserActions.UserTypes): UserState => {
  switch (action.type) {
    case UserActions.EMAIL_SIGN_IN_START:
    case UserActions.GOOGLE_SIGN_IN_START:
    case UserActions.FACEBOOK_SIGN_IN_START:
    case UserActions.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
        userError: null
      }

    case UserActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      }

    case UserActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: undefined,
        userError: null
      }

    case UserActions.SIGN_IN_FAILURE:
    case UserActions.SIGN_UP_FAILURE:
    case UserActions.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        userError: action.payload
      }

    default:
      return state
  }
}

export default userReducer
