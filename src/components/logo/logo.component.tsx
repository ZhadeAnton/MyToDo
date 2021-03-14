import React from 'react'
import './logo.styles.scss'
import {ReactComponent as BrandLogo} from '../../assets/brand-logo.svg'
import {Link} from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link className=" brand-logo--wrapper valign-wrapper" to="/">
      <BrandLogo/>
      <p>Any Do</p>
    </Link>
  )
}

export default Logo
