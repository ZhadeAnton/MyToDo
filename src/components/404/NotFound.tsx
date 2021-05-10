import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

import styles from './noFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1>404</h1>
        <h3>Not found</h3>
        <NavLink to='/'><LeftOutlined /> Go Home</NavLink>
      </div>
    </div>
  )
}

export default NotFound
