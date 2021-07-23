export interface IUser {
  id: string,
  displayName: string,
  email: string,
  photoURL: string,
  createAt: {[key: string]: string},
  data?: any
}

export interface ISignInCredentionals {
  email: string,
  password: string
}

export interface ISignUpCredentionals extends ISignInCredentionals {
  displayName: string
}


export interface IFnSignInWithGoogle {
  (): any
}

export interface IFnSignInWithFacebook {
  (): any
}

export interface IFnSignInWithEmail {
  (email: string, password: string): any
}

export interface IFnSignUp {
  (displayName: string, email: string, password: string): any
}
