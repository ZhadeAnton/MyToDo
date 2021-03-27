import React from 'react'
import {Link} from 'react-router-dom'

import styles from './navigationLink.module.scss'

interface Props {
  children: string,
  to: string
}

const CustomLink: React.FC<Props> = (props) => {
  return (
    <Link
      to={props.to}
      className={styles.navLink}
    >
      {props.children}
    </Link>
  )
}

export default CustomLink
