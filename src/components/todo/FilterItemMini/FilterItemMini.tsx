import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './filterItemMini.module.scss'

interface Props {
  item: {
    title: string,
    icon: React.SVGProps<SVGSVGElement>,
    to: string,
  }
}

export default function FilterItemMini(props: Props) {
  return (
    <NavLink
      className={styles.filterLink}
      to={props.item.to}
    >
      <li
        key={props.item.to}
        className={styles.filterItem}
      >
        <span className={styles.icon}>
          {props.item.icon}
        </span>
      </li>
    </NavLink>
  )
}
