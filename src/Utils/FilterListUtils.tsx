import React from 'react'
import {
  StarOutlined,
  FireOutlined,
  BellOutlined,
  DiffOutlined } from '@ant-design/icons'

export const drawerFilterItems = [
  { title: 'Todos', icon: <FireOutlined />, to: '/' },
  { title: 'Unlisted', icon: <DiffOutlined />, to: '/unlisted'},
  { title: 'Important', icon: <StarOutlined />, to: '/important'},
  { title: 'Planned', icon: <BellOutlined />, to: '/planned'}
]
