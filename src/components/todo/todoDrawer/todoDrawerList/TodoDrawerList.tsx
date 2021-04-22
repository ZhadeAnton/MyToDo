import React from 'react'

import { ITodoList } from '../../../../interfaces'
import TodoDrawerListItem from '../todoDrawerListItem/todoDrawerListItem'

interface Props {
  lists: Array<ITodoList>
}

const TodoDrawerList = (props: Props) => {
  return (
    <ul>
      {
        props.lists.map((list) =>
          <TodoDrawerListItem key={list.id} list={list}/>)
      }
    </ul>
  )
}

export default TodoDrawerList
