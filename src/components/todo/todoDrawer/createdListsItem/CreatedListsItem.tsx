import React from 'react'
import { NavLink } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons'

import styles from './createdListsItem.module.scss'
import { ITodoList } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon'

interface Props {
  list: ITodoList
  deleteList: TodoListProps['deleteList']
}

const CreatedListsItem: React.FC<Props> = (props) => {
  return (
    <li
      key={props.list.id}
      className={styles.createdListsItem}
    >
      <UnorderedListOutlined />

      <NavLink to={`/todo/${props.list.id}`}>
        {props.list.title}
      </NavLink>

      <RemoveIcon
        onClick={() => props.deleteList(props.list.id)}
      />
    </li>
  )
}

export default CreatedListsItem
