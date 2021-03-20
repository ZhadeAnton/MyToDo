// TODO: I'm not sure that's actualy work...
export interface IUser {
  user?: {
    createAt: {[key: string]: string},
    displayName: string,
    email: string,
    id: string,
    uid?: string,
    data?: any
  }
}

export interface ISignInCredentionals {
  email: string,
  password: string
}

export interface ISignUpCredentionals extends ISignInCredentionals {
  displayName: string
}

export interface IError {
  error: Error | null
}
