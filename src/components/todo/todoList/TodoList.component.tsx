import React from 'react'

import {ITodo} from '../../../redux/todo/todoInterfaces'
import TodoItem from '../todoItem/TodoItem.component'

interface Props {
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  todos: ITodo[]
}

const TodoList = (props: Props) => {
  if (props.todos.length === 0) {
    return <p>No todos</p>
  }

  return (
    <ul>
      {props.todos.map((todo: ITodo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            toggleTodo={props.toggleTodo}
          />
        )
      }
      )}
    </ul>
  )
}

export default TodoList
