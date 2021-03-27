import React from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

import styles from './header.module.scss'
import Logo from '../logo/logo.component'
import UserContainer from '../user//User.container'

const Header = () => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.wrapper, 'container')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={classnames(styles.navigation)}>
          <ul className={classnames(styles.list)}>
            <li><Link className={styles.link} to="/login">Sign in</Link></li>
            <li><Link className={styles.link} to="/todo">To do list</Link></li>
            <li><Link className={styles.link} to="/team">Teams</Link></li>
            <li><Link className={styles.link} to="/info">Information</Link></li>
          </ul>
        </nav>
        <div className={styles.user}>
          <UserContainer />
        </div>
      </div>
    </header>
  )
}

export default Header
