import React from 'react'

import './header.scss'
import { IUser } from '../../Interfaces/UserInterfaces'
import UserProfile from '../custom/userProfile/UserProfile'
import BrandLogo from '../custom/BrandLogo/BrandLogo'

interface Props {
  user: IUser | null,
  onSignOut: () => void
}

export default function Header(props: Props) {
  return (
    <header className='header'>
      <BrandLogo />

      <UserProfile
        user={props.user}
        signOutStart={props.onSignOut}
        dropdownPlacement='bottomLeft'
      />
    </header>
  )
}
