import {
  ISignInCredentionals,
  ISignUpCredentionals
} from './userInterfaces'
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

// FIXME: Need to fix user: any
export const signInSuccess = (user: any): actions.SignInSuccess => ({
  type: actions.SIGN_IN_SUCCESS,
  payload: user
})

export const signOutSuccess = (): actions.SignOutSucess => ({
  type: actions.SIGN_OUT_SUCCESS
})

export const checkUserSession = (): actions.CheckUserSession => ({
  type: actions.CHECK_USER_SESSION
})

export const signOutFailure = (error: string): actions.SignOutFailure => ({
  type: actions.SIGN_OUT_FAILURE,
  payload: error
})

export const signInFailure = (error: string): actions.SignInFailure => ({
  type: actions.SIGN_IN_FAILURE,
  payload: error
})

export const signUpFailure = (error: string): actions.SignUpFailure => ({
  type: actions.SIGN_UP_FAILURE,
  payload: error
})

export const clearError = (): actions.ClearError => ({
  type: actions.CLEAR_ERROR,
})
