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
  { title: 'Todos', icon: <FireOutlined style={{fill: 'goldenrod'}} />, to: '/' },
  { title: 'Unlisted', icon: <DiffOutlined style={{fill: 'blue'}} />, to: '/unlisted'},
  { title: 'Important', icon: <StarOutlined style={{fill: 'red'}} />, to: '/important'},
  { title: 'Planned', icon: <BellOutlined style={{fill: 'green'}} />, to: '/planned'}
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
