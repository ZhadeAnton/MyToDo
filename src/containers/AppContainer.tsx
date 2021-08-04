import React from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHooks';
import { IUser } from '../Interfaces/UserInterfaces';
import { signOutStart } from '../Redux/User/userActionCreators';
import App from '../App';

export interface IAppContainer {
  user: IUser | null,
  handleSignOut: () => void
}

export default function AppContainer() {
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.user.currentUser)

  const handleSignOut = () => {
    dispatch(signOutStart())
  }

  return (
    <App
      user={user}
      handleSignOut={handleSignOut}
    />
  )
}
