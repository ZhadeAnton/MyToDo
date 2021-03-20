import {
  IUser,
  ISignInCredentionals,
  ISignUpCredentionals
} from './userInterfaces'

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export interface GoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START
}

export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START'
export interface EmailSignInStart {
  type: typeof EMAIL_SIGN_IN_START,
  payload: ISignInCredentionals
}

export const SIGN_UP_START = 'SIGN_UP_START'
export interface SignUpStart {
  type: typeof SIGN_UP_START,
  payload: ISignUpCredentionals
}

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS,
  payload: IUser
}

export const SIGN_OUT_START = 'SIGN_OUT_START'
export interface SignOutStart {
  type: typeof SIGN_OUT_START,
}

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export interface SignOutSucess {
  type: typeof SIGN_OUT_SUCCESS
}

export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'
export interface SignOutFailure {
  type: typeof SIGN_OUT_FAILURE,
  payload: string
}

export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'
export interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE,
  payload: string
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
| EmailSignInStart
| SignUpStart
| SignInSuccess
| CheckUserSession
| SignInFailure
| SignUpFailure
| SignOutStart
| SignOutSucess
| SignOutFailure