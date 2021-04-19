import React from 'react'

import TodoDrawerFilterItem from '../todoDrawerFilterItem/TodoDrawerFilterItem'
import {ReactComponent as IconHome}
  from '../../../assets/todo/icons/todo-icon-home.svg'
import {ReactComponent as IconImportant}
  from '../../../assets/todo/icons/todo-icon-important.svg'
import {ReactComponent as IconPlanned}
  from '../../../assets/todo/icons/todo-icon-planned.svg'

const drawerFilter = [
  { title: 'Home', icon: <IconHome />, to: '/todo/general'},
  { title: 'Important', icon: <IconImportant />, to: '/todo/important'},
  { title: 'Planned', icon: <IconPlanned />, to: '/todo/planned'}
]

const TodoDrawerFilterList = () => {
  return (
    <ul>
      {
        drawerFilter.map((item) =>
          <TodoDrawerFilterItem key={item.title} item={item} />)
      }
    </ul>
  )
}
export default TodoDrawerFilterList
