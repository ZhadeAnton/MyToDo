import React from 'react'

import { TodoListProps } from '../../../../containers/TodoPageContainer'
import { ITodoList } from '../../../../interfaces'
import TodoDrawerListItem from '../todoDrawerListItem/todoDrawerListItem'

interface Props {
  lists: Array<ITodoList>,
  deleteList: TodoListProps['deleteList']
}

const TodoDrawerList = (props: Props) => {
  return (
    <ul>
      {
        props.lists.map((list) =>
          <TodoDrawerListItem
            key={list.id}
            list={list}
            deleteList={props.deleteList}
          />)
      }
    </ul>
  )
}

export default TodoDrawerList
