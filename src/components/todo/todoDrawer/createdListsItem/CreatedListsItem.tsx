import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons'

import styles from './createdListsItem.module.scss'
import { ITodoList } from '../../../../Interfaces/TodoInterfaces'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon'

interface Props {
  list: ITodoList
  onDeleteList: (todoId: string) => void
}

const CreatedListsItem: React.FC<Props> = (props) => {
  const history = useHistory()

  const handleRemoveItemClick = () => {
    props.onDeleteList(props.list.id)
    history.push('/')
  }

  return (
    <li
      key={props.list.id}
      className={styles.createdListsItem}
    >
      <UnorderedListOutlined />

      <NavLink to={`/${props.list.id}`}>
        {props.list.title}
      </NavLink>

      <RemoveIcon
        onClick={handleRemoveItemClick}
      />
    </li>
  )
}

export default CreatedListsItem
