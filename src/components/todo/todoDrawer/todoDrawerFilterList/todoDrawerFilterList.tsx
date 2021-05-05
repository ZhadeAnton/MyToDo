import React from 'react'
import {
  StarOutlined,
  FireOutlined,
  BellOutlined,
  DiffOutlined } from '@ant-design/icons'

import styles from './todoDrawerFilterList.module.scss'
import FilterItem from '../todoDrawerFilterItem/FilterItem'

const drawerFilterItems = [
  { title: 'Tasks', icon: <FireOutlined />, to: '/todo/tasks'},
  { title: 'Unlisted', icon: <DiffOutlined />, to: '/todo/unlisted'},
  { title: 'Important', icon: <StarOutlined />, to: '/todo/important'},
  { title: 'Planned', icon: <BellOutlined />, to: '/todo/planned'}
]

const TodoDrawerFilterList = () => {
  return (
    <ul className={styles.filterList}>
      {
        drawerFilterItems.map((item) =>
          <FilterItem
            key={item.title}
            item={item}
          />)
      }
    </ul>
  )
}
export default TodoDrawerFilterList
