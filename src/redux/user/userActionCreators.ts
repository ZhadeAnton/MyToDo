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
