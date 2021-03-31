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
          <li key={todo.id}>
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
              deleteTodo={props.deleteTodo}
              toggleTodo={props.toggleTodo}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
