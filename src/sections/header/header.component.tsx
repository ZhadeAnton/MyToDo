import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Logo from '../../components/logo/logo.component'
import {RootState} from '../../redux/store'
import {IUser} from '../../redux/user/user-@types'
import {auth} from '../../firebase/firebase.config'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user-selectors'

const Header: React.FC<IUser> = ({user}) => {
  return (
    <header className="header navbar-fixed white container">
      <nav className="white container">
        <span className="header__logo--wrapper ml-sm">
          <Logo />
        </span>
        <ul className="right teal accent-3 hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          {
            user ?
              <li><Link
                to="/login"
                onClick={() => auth.signOut()}>
                Sign out
              </Link></li> :
              <li><Link to="/login">Sign in</Link></li>
          }
          <li><Link to="/main">Information</Link></li>
          <li><Link to="/main">About us</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = createStructuredSelector<RootState, IUser>({
  user: selectCurrentUser
})

export default connect(mapStateToProps, null)(Header)
