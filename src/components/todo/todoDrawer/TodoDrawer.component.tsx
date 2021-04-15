/* eslint-disable max-len */
import React from 'react'
import {
  HomeOutlined,
  AntDesignOutlined,
  VerticalAlignMiddleOutlined
} from '@ant-design/icons'
import { Divider, Spin } from 'antd';

import styles from './todoDrawer.module.scss'
import CustomLink from '../../custom/customLink/CustomLink'
import { ITodoList } from '../../../interfaces';

interface Props {
  lists: Array<ITodoList>
}

const TodoDrawer = ({lists }: Props) => {
  if (!lists) return <Spin />

  return (
    <aside className={styles.drawer}>
      <ul className={styles.drawerNav}>
        {
          [
            { title: 'Home', icon: <HomeOutlined />, to: '/todo'},
            { title: 'Important', icon: <AntDesignOutlined />, to: '/todo/important'},
            { title: 'Planned', icon: <VerticalAlignMiddleOutlined />, to: '/todo/planned'}
          ].map((item) => {
            return (
              <li key={item.title}>
                <i>{item.icon}</i>
                <CustomLink to={item.to}>{item.title}</CustomLink>
              </li>
            )
          })
        }
      </ul>

      <Divider>Lists</Divider>

      <ul className={styles.drawerLists}>
        {
          lists?.map((item) => {
            return (
              <li key={item.id}>
                <CustomLink to={`/todo/${item.id}`}>{item.title}</CustomLink>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default TodoDrawer
