import {
  ISignInCredentionals,
  ISignUpCredentionals
} from './user-@types'
import * as actions from './userActionTypes'

export const googleSignInStart = (): actions.GoogleSignInStart => ({
  type: actions.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = // Sign In
(signInCredentionals: ISignInCredentionals): actions.EmailSignInStart => ({
  type: actions.EMAIL_SIGN_IN_START,
  payload: signInCredentionals
})

export const signUpStart = // Sign Up
(signUpCredentionals: ISignUpCredentionals): actions.SignUpStart => ({
  type: actions.SIGN_UP_START,
  payload: signUpCredentionals
})

// FIXME: Need to fix user: any
export const signInSuccess = (user: any): actions.SignInSuccess => ({
  type: actions.SIGN_IN_SUCCESS,
  payload: user
})

export const checkUserSession = (): actions.CheckUserSession => ({
  type: actions.CHECK_USER_SESSION
})

export const signInFailure = (error: string): actions.SignInFailure => ({
  type: actions.SIGN_IN_FAILURE,
  payload: error
})

export const signUpFailure = (error: string): actions.SignUpFailure => ({
  type: actions.SIGN_UP_FAILURE,
  payload: error
})
