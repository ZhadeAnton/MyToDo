import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './filterItem.module.scss'

interface Props {
  item: {
    title: string,
    icon: React.SVGProps<SVGSVGElement>,
    to: string,
  }
}

const FilterItem: React.FC<Props> = (props) => {
  return (
    <li
      className={styles.filterItem}
      key={props.item.to}
    >
      <span className={styles.icon}>
        {props.item.icon}
      </span>

      <NavLink
        to={props.item.to}
        className={styles.link}
      >
        {props.item.title}
      </NavLink>
    </li>
  )
}

export default FilterItem
