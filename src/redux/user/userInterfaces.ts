export interface IUser {
  displayName: string,
  email: string,
  id: string,
  createAt: {[key: string]: string},
  uid?: string,
  data?: any
}

export interface ISignInCredentionals {
  email: string,
  password: string
}

export interface ISignUpCredentionals extends ISignInCredentionals {
  displayName: string
}

export interface IError {
  error: string
}
