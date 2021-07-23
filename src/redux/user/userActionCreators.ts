import {
  ISignInCredentionals,
  ISignUpCredentionals,
  IUser
} from '../../Interfaces/UserInterfaces'
import * as actions from './userActionTypes'

export const googleSignInStart = (): actions.GoogleSignInStart => ({
  type: actions.GOOGLE_SIGN_IN_START
})

export const facebookSignInStart = (): actions.FacebookSignInStart => ({
  type: actions.FACEBOOK_SIGN_IN_START
})

export const emailSignInStart =
(signInCredentionals: ISignInCredentionals): actions.EmailSignInStart => ({
  type: actions.EMAIL_SIGN_IN_START,
  payload: signInCredentionals
})

export const signUpStart =
(signUpCredentionals: ISignUpCredentionals): actions.SignUpStart => ({
  type: actions.SIGN_UP_START,
  payload: signUpCredentionals
})

export const signOutStart = (): actions.SignOutStart => ({
  type: actions.SIGN_OUT_START,
})

export const signInSuccess = (user: IUser): actions.SignInSuccess => ({
  type: actions.SIGN_IN_SUCCESS,
  payload: user
})

export const signOutSuccess = (): actions.SignOutSucess => ({
  type: actions.SIGN_OUT_SUCCESS
})

export const checkUserSession = (): actions.CheckUserSession => ({
  type: actions.CHECK_USER_SESSION
})

export const authError = (): actions.AuthError => ({
  type: actions.AUTH_ERROR
})
