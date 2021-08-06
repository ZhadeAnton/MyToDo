import React from 'react'
import { Popconfirm } from 'antd'
import { v4 } from 'uuid'
import { useHistory, NavLink } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons'

import styles from './createdListsItem.module.scss'
import { ITodoList } from '../../../../Interfaces/TodoInterfaces'
import { addNotification } from '../../../../Redux/General/GeneralActionCreators'
import { useAppDispatch } from '../../../../Hooks/usePreTypedHooks'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon'

interface Props {
  list: ITodoList
  onDeleteList: (todoId: string) => void
}

export default function UserListsItem(props: Props) {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const handleRemoveItemClick = () => {
    props.onDeleteList(props.list.id)
    dispatch(addNotification('SUCCESS', 'List was deleted', v4()))
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

      <Popconfirm
        placement="topLeft"
        title='Are you sure to delete this list?'
        onConfirm={handleRemoveItemClick}
        okText="Yes"
        cancelText="No"
      >
        <RemoveIcon />
      </Popconfirm>
    </li>
  )
}
