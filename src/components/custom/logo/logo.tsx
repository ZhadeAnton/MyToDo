import React from 'react'

import styles from './logo.module.scss'
import BrandLogo from '../../../assets/logo.png'
import {Link} from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <div className={styles.logo} >
      <Link to="/">
        <img src={BrandLogo} />
      </Link>
    </div>
  )
}

export default Logo
