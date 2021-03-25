import * as actions from './errorActionTypes'

export const signInFailure = (error: string): actions.SignInFailure => ({
  type: actions.SIGN_IN_FAILURE,
  payload: error
})

export const signUpFailure = (error: string): actions.SignUpFailure => ({
  type: actions.SIGN_UP_FAILURE,
  payload: error
})

export const signOutFailure = (error: string): actions.SignOutFailure => ({
  type: actions.SIGN_OUT_FAILURE,
  payload: error
})
