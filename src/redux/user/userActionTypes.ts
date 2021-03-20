import {IUser, IEmailAndPassword} from './user-@types'

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export interface GoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START
}

export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START'
export interface EmailSignInStart {
  type: typeof EMAIL_SIGN_IN_START,
  payload: IEmailAndPassword
}

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS,
  payload: IUser
}

export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export interface SignInFailure {
  type: typeof SIGN_IN_FAILURE,
  payload: string
}

export const CHECK_USER_SESSION = 'CHECK_USER_SESSION'
export interface CheckUserSession {
  type: typeof CHECK_USER_SESSION
}

export type UserTypes =
| GoogleSignInStart
| SignInSuccess
| SignInFailure
| CheckUserSession
| EmailSignInStart
