import React from 'react'

import styles from './logo.module.scss'
import {ReactComponent as BrandLogo} from '../../assets/brand-logo.svg'
import {Link} from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link className={styles.logo} to="/">
      <BrandLogo/>
    </Link>
  )
}

export default Logo
