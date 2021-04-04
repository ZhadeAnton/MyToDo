import React from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoRecive } from '../../../interfaces'

interface Props {
  todos: ITodoRecive,
  list: {
    title: string
  }
}

const TodoList = ({ todos, list }: Props) => {
  return (
    <div className={styles.todoList}>
      <p>{list.title}</p>
      <ul>
        {
          todos?.map((todo) =>
            <TodoListItem
              key={todo.id}
              todo={todo}
            />
          )
        }
      </ul>
    </div>
  )
}

export default TodoList
