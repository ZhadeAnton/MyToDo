/* eslint-disable max-len */
import React from 'react'
import { List } from 'antd';
import {
  StarOutlined,
  FireOutlined,
  BellOutlined,
  DiffOutlined } from '@ant-design/icons'

import styles from './filterList.module.scss'
import FilterItem from '../filterItem/FilterItem'

const drawerFilterItems = [
  { title: 'Tasks', icon: <FireOutlined style={{fill: 'goldenrod'}} />, to: '/todo/tasks' },
  { title: 'Unlisted', icon: <DiffOutlined style={{fill: 'blue'}} />, to: '/todo/unlisted'},
  { title: 'Important', icon: <StarOutlined style={{fill: 'red'}} />, to: '/todo/important'},
  { title: 'Planned', icon: <BellOutlined style={{fill: 'green'}} />, to: '/todo/planned'}
]

const TodoDrawerFilterList = () => {
  return (
    <List className={styles.filterList}
      dataSource={drawerFilterItems}
      renderItem={(item) => (
        <FilterItem
          key={item.title}
          item={item}
        />
      )}
    />
  )
}
export default TodoDrawerFilterList
