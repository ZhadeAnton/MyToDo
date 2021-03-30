import React from 'react'

import TodoList from '../todoList/TodoList.component'
import AddTodo from '../addTodo/AddTodo.component'

const TodoComponent = () => {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default TodoComponent
