import React from 'react'
import {Link} from 'react-router-dom'

import styles from './logo.module.scss'
import BrandLogo from '../../../assets/logo.png'

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
