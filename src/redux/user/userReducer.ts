import {IUser} from '../../Interfaces/UserInterfaces'
import * as actions from './userActionTypes'

export interface UserState {
  currentUser: IUser | null,
  isLoading: boolean,
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false
}

const userReducer = (
    state: UserState = INITIAL_STATE,
    action: actions.UserTypes): UserState => {
  switch (action.type) {
    case actions.EMAIL_SIGN_IN_START:
    case actions.GOOGLE_SIGN_IN_START:
    case actions.FACEBOOK_SIGN_IN_START:
    case actions.SIGN_UP_START:
      return {
        ...state,
        isLoading: true
      }

    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false
      }

    case actions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }

    case actions.SIGN_IN_FAILURE:
    case actions.SIGN_UP_FAILURE:
    case actions.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default userReducer
