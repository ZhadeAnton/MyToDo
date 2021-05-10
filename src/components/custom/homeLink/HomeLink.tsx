import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

import styles from './homeLink.module.scss'

const HomeLink = () => {
  return (
    <div className={styles.homeLink}>
      <NavLink to='/'><LeftOutlined />Back home</NavLink>
    </div>
  )
}

export default HomeLink
