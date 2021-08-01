import {
  IUser,
  ISignInCredentionals,
  ISignUpCredentionals,
} from '../../Interfaces/UserInterfaces'

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export interface GoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START
}

export const FACEBOOK_SIGN_IN_START = 'FACEBOOK_SIGN_IN_START'
export interface FacebookSignInStart {
  type: typeof FACEBOOK_SIGN_IN_START
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

export const CHECK_USER_SESSION = 'CHECK_USER_SESSION'
export interface CheckUserSession {
  type: typeof CHECK_USER_SESSION
}

export const AUTH_ERROR = 'AUTH_ERROR'
export interface AuthError {
  type: typeof AUTH_ERROR
}

export type UserTypes =
| GoogleSignInStart
| EmailSignInStart
| FacebookSignInStart
| SignUpStart
| SignInSuccess
| CheckUserSession
| SignOutStart
| SignOutSucess
| AuthError
