import React from 'react-redux'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  FontSizeOutlined,
  StarOutlined } from '@ant-design/icons';

export const sortMenu = [
  { sort: 'date', icon: <ClockCircleOutlined />, text: 'By date' },
  { sort: 'title', icon: <FontSizeOutlined />, text: 'By name' },
  { sort: 'important', icon: <StarOutlined />, text: 'By important' },
  { sort: 'completed', icon: <CheckCircleOutlined />, text: 'By completed' },
  { sort: 'unCompleted', icon: <CloseCircleOutlined />, text: 'By uncompleted' },
]
