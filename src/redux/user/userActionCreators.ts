import {IEmailAndPassword} from './user-@types'
import * as actions from './userActionTypes'

export const googleSignInStart = (): actions.GoogleSignInStart => ({
  type: actions.GOOGLE_SIGN_IN_START
})

export const emailSignInStart =
(emailAndPassword: IEmailAndPassword): actions.EmailSignInStart => ({
  type: actions.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

// FIXME: Need to fix user: any
export const signInSuccess = (user: any): actions.SignInSuccess => ({
  type: actions.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = (error: string): actions.SignInFailure => ({
  type: actions.SIGN_IN_FAILURE,
  payload: error
})

export const checkUserSession = (): actions.CheckUserSession => ({
  type: actions.CHECK_USER_SESSION
})
