import React from 'react'

import {ReactComponent as IconList}
  from '../../../../assets/todo/icons/todo-icon-list.svg'
import { ITodoList } from '../../../../interfaces'
import CustomLink from '../../../custom/customLink/CustomLink'

interface Props {
  list: ITodoList
}

const TodoDrawerListItem: React.FC<Props> = (props) => {
  return (
    <li key={props.list.id}>
      <i><IconList /></i>

      <CustomLink
        to={`/todo/${props.list.id}`}
      >
        {props.list.title}
      </CustomLink>
    </li>
  )
}

export default TodoDrawerListItem
