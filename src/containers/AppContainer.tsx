import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHooks';

import App from '../App';
import { IUser } from '../Redux/User/userInterfaces';

export interface IAppContainer {
  user: IUser | null
}

export default function AppContainer() {
  const user = useAppSelector((state) => state.user.currentUser)

  return <App user={user}/>
}
