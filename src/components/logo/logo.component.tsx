import React from 'react'

import styles from './logo.module.scss'
import {ReactComponent as BrandLogo} from '../../assets/brand-logo.svg'
import {Link} from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link className={styles.logo} to="/">
      <BrandLogo/>
      <h3>Any Do</h3>
    </Link>
  )
}

export default Logo
