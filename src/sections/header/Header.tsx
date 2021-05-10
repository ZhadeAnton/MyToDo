import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './header.module.scss'
import { MainPageProps } from '../../containers/MainPageContainer'
import UserProfile from '../../components/custom/userProfile/UserProfile'
import Logo from '../../components/custom/logo/logo'

interface Props {
  user: MainPageProps['user'],
  signOutStart: MainPageProps['signOutStart']
}

const headerMenu = [
  {to: '/todo', title: 'todo'},
  {to: '/login', title: 'login'},
  {to: '/team', title: 'team'},
  {to: '/info', title: 'info'},
]

const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <div className={cn(styles.headerWrapper, 'container')}>
        <Logo />

        <ul className={styles.headerNavigation}>
          {
            headerMenu.map((link, idx) => {
              return <NavLink
                key={idx}
                to={link.to}
              >{link.title}</NavLink>
            })
          }
        </ul>

        <div className={styles.userProfile}>
          <UserProfile
            user={props.user}
            signOutStart={props.signOutStart}
            dropdownPlacement='topCenter'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
