import React from 'react'

import styles from './bannerName.module.scss'
import { ITodoList } from '../../../Interfaces/TodoInterfaces'

interface Props {
  listTitle: ITodoList['title'] | undefined,
  path: string
}

export default function BannerName(props: Props) {
  return (
    <h2 className={styles.bannerName}>
      {
        props.listTitle
        ? props.listTitle
        : props.path === '/'
        ? 'Todos'
        : `${props.path.slice(1)}`
      }
    </h2>
  )
}
