import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'

import styles from './todoDrawerListItem.module.scss'
import {ReactComponent as IconList}
  from '../../../../assets/todo/icons/todo-icon-list.svg'
import { ITodoList } from '../../../../interfaces'
import CustomLink from '../../../custom/customLink/CustomLink'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  list: ITodoList
  deleteList: TodoListProps['deleteList']
}

const TodoDrawerListItem: React.FC<Props> = (props) => {
  return (
    <li
      key={props.list.id}
      className={styles.drawerlistItem}
    >
      <i><IconList /></i>

      <CustomLink
        to={`/todo/${props.list.id}`}
      >
        {props.list.title}
      </CustomLink>

      <DeleteOutlined
        onClick={() => props.deleteList(props.list.id)}
      />
    </li>
  )
}

export default TodoDrawerListItem
