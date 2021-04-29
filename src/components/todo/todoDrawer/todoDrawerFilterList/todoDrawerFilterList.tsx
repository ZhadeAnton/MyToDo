import React from 'react'

import TodoDrawerFilterItem from '../todoDrawerFilterItem/TodoDrawerFilterItem'
import {ReactComponent as IconHome}
  from '../../../../assets/todo/icons/todo-icon-home.svg'
import {ReactComponent as IconImportant}
  from '../../../../assets/todo/icons/todo-icon-important.svg'
import {ReactComponent as IconPlanned}
  from '../../../../assets/todo/icons/todo-icon-planned.svg'

interface Props {
}

const drawerFilter = [
  { title: 'Tasks', icon: <IconHome />, to: '/todo/tasks'},
  { title: 'Unlisted', icon: <IconHome />, to: '/todo/unlisted'},
  { title: 'Important', icon: <IconImportant />, to: '/todo/important'},
  { title: 'Planned', icon: <IconPlanned />, to: '/todo/planned'}
]

const TodoDrawerFilterList: React.FC<Props> = (props) => {
  return (
    <ul>
      {
        drawerFilter.map((item) =>
          <TodoDrawerFilterItem
            key={item.title}
            item={item}
          />)
      }
    </ul>
  )
}
export default TodoDrawerFilterList
