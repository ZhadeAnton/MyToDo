import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './brandLogo.module.scss'
import { ReactComponent as Logo } from '../../../assets/SVG/checked.svg'

export default function BrandLogo() {
  return (
    <NavLink to='/'>
      <div className={styles.brandLogo}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <p className={styles.title}>
          My Todo
        </p>
      </div>
    </NavLink>
  )
}
