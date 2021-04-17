/* eslint-disable max-len */
import React from 'react'

import { Divider, Spin } from 'antd';

import styles from './todoDrawer.module.scss'
import {ReactComponent as IconHome} from '../../../assets/todo/icons/todo-icon-home.svg'
import {ReactComponent as IconImportant} from '../../../assets/todo/icons/todo-icon-important.svg'
import {ReactComponent as IconPlanned} from '../../../assets/todo/icons/todo-icon-planned.svg'
import {ReactComponent as IconList} from '../../../assets/todo/icons/todo-icon-list.svg'
import CustomLink from '../../custom/customLink/CustomLink'
import { ITodoList } from '../../../interfaces';
import { IUser } from '../../../redux/user/userInterfaces';
import UserProfileContainer from '../../../containers/UserProfileContainer.container';

interface Props {
  user: IUser | undefined,
  lists: Array<ITodoList>
}

const TodoDrawer: React.FC<Props> = (props) => {
  if (!props.lists) return <Spin />

  return (
    <aside className={styles.todoDrawer}>
      <div>
        <UserProfileContainer />
      </div>
      <ul className={styles.topList}>
        {
          [
            { title: 'Home', icon: <IconHome />, to: '/'},
            { title: 'Important', icon: <IconImportant />, to: '/todo/important'},
            { title: 'Planned', icon: <IconPlanned />, to: '/todo/planned'}
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

      <Divider />

      <ul className={styles.todoList}>
        {
          props.lists?.map((item) => {
            return (
              <li
                key={item.id}
              >
                <i><IconList /></i>
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
