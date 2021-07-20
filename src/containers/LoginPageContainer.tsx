import React from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHooks'
import * as actions from '../Redux/User/userActionCreators'
import * as interfaces from '../Interfaces/UserInterfaces'

import LoginPage from '../Routes/Login/LoginPage'

export interface ILoginContainer {
  isLoading: boolean,
  handleSignInWithGoogle: interfaces.IFnSignInWithGoogle,
  handleSignInWithFacebook: interfaces.IFnSignInWithFacebook,
  handleSignInWithEmail: interfaces.IFnSignInWithEmail,
  handleSignUp: interfaces.IFnSignUp
}

export default function LoginContainer() {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const isLoading = state.user.isLoading

  const handleSignInWithGoogle: interfaces.IFnSignInWithGoogle = () => {
    dispatch(actions.googleSignInStart())
  }

  const handleSignInWithFacebook: interfaces.IFnSignInWithFacebook = () => {
    dispatch(actions.facebookSignInStart())
  }

  const handleSignInWithEmail: interfaces.IFnSignInWithEmail = (email, password) => {
    dispatch(actions.emailSignInStart({email, password}))
  }

  const handleSignUp: interfaces.IFnSignUp = (displayName, email, password) => {
    dispatch(actions.signUpStart({displayName, email, password}))
  }

  return (
    <LoginPage
      isLoading={isLoading}
      handleSignInWithGoogle={handleSignInWithGoogle}
      handleSignInWithFacebook={handleSignInWithFacebook}
      handleSignInWithEmail={handleSignInWithEmail}
      handleSignUp={handleSignUp}
    />
  )
}
