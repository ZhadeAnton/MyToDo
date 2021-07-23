import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHooks';

import App from '../App';
import { IUser } from '../Interfaces/UserInterfaces';

export interface IAppContainer {
  user: IUser | null
}

export default function AppContainer() {
  const user = useAppSelector((state) => state.user.currentUser)

  return <App user={user}/>
}
