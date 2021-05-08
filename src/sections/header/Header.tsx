import React from 'react'
import classnames from 'classnames'

import styles from './header.module.scss'
import { MainPageProps } from '../../containers/MainPageContainer'
import Logo from '../../components/custom/logo/logo'
import CustomLink from '../../components/custom/customLink/CustomLink'
import UserProfile from '../../components/custom/userProfile/UserProfile'

interface Props {
  user: MainPageProps['user'],
  signOutStart: MainPageProps['signOutStart']
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.wrapper, 'container')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={classnames(styles.navigation)}>
          <ul className={classnames(styles.list)}>
            <li><CustomLink to={'/todo'}>Any.do</CustomLink></li>
            <li><CustomLink to={'/team'}>Teams</CustomLink></li>
            <li><CustomLink to={'/info'}>Info</CustomLink></li>
          </ul>
        </nav>
        <div className={styles.user}>
        </div>

        <UserProfile
          user={props.user}
          signOutStart={props.signOutStart}
          dropdownPlacement='topCenter'
        />
      </div>
    </header>
  )
}

export default Header
