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
