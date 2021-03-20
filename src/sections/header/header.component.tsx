import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import Logo from '../../components/logo/logo.component'
import {UserTypes} from '../../redux/user/userActionTypes'
import {signOutStart} from '../../redux/user/userActionCreators'

interface Props {
  user: any,
  signOut(): void
}

const Header: React.FC<Props> = ({user, signOut}) => {
  return (
    <header className="header navbar-fixed white container">
      <nav className="white container">
        <span className="header__logo--wrapper ml-sm">
          <Logo />
        </span>
        <ul className="right teal accent-3 hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/main">Information</Link></li>
          <li><Link to="/main">About us</Link></li>
          <li><Link to="/login" onClick={() => signOut()}>LogOut</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signOut: () => dispatch<any>(signOutStart())
})

export default connect(null, mapDispatchToProps)(Header)
