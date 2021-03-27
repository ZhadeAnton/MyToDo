import React from 'react'
import classnames from 'classnames'

import styles from './header.module.scss'
import Logo from '../logo/logo.component'
import UserContainer from '../user//User.container'
import NavigationLink from '../navigationLink/NavigationLink'

const Header = () => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.wrapper, 'container')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={classnames(styles.navigation)}>
          <ul className={classnames(styles.list)}>
            <li><NavigationLink to={'/todo'}>Any.do</NavigationLink></li>
            <li><NavigationLink to={'/team'}>Teams</NavigationLink></li>
            <li><NavigationLink to={'/info'}>Info</NavigationLink></li>
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
