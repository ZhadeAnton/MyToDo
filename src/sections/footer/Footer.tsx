import React from 'react'
import { NavLink } from 'react-router-dom'
import { GithubOutlined } from '@ant-design/icons'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Designed by Zhade Anton 2021</p>

      <NavLink to='https://github.com/ZhadeAnton'>
        <GithubOutlined />
      </NavLink>
    </footer>
  )
}

export default Footer
