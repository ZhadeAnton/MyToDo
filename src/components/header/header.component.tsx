import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../icon/logo.component'

const Header: React.FC = () => {
  return (
    <header className="red accent-1">
      <nav className="red accent-1 container">
        <Logo />
        <ul className="right hide-on-med-and-down red accent-1">
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
