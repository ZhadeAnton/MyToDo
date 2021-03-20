import React from 'react'
import {Link} from 'react-router-dom'
import {IUser} from '../../redux/user/userInterfaces'

import Logo from '../logo/logo.component'

interface Props {
  user: IUser | undefined,
  signOut(): void
}

const Header: React.FC<Props> = ({signOut, user}) => {
  return (
    <header className="header navbar-fixed white container">
      <nav className="white container">
        <span className="header__logo--wrapper ml-sm">
          <Logo />
        </span>
        {
          user ? <span style={{color: 'red'}}>Log Out</span> :
          <span style={{color: 'red'}} onClick={() => signOut()}>log in</span>
        }
        <ul className="right teal accent-3 hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/main">Information</Link></li>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
