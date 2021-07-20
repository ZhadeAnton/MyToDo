import React from 'react'
import { NavLink } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons'

import styles from './createdListsItem.module.scss'
import { IFnDeleteList, ITodoList } from '../../../../Interfaces/interfaces'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon'

interface Props {
  list: ITodoList
  onDeleteList: IFnDeleteList
}

const CreatedListsItem: React.FC<Props> = (props) => {
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
        onClick={() => props.onDeleteList(props.list.id)}
      />
    </li>
  )
}

export default CreatedListsItem
