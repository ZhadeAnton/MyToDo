import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../components/logo/logo.component'

const Header: React.FC = () => {
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
        </ul>
      </nav>
    </header>
  )
}

export default Header
