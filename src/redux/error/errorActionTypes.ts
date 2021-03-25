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

export type ErrorTypes =
| SignInFailure
| SignUpFailure
| SignOutFailure
