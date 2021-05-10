import React from 'react'

import styles from './noFound.module.scss'
import HomeLink from '../custom/homeLink/HomeLink'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1>404</h1>
        <h3>Not found</h3>
        <HomeLink />
      </div>
    </div>
  )
}

export default NotFound
