import React from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoRecive, ITodoList } from '../../../interfaces'

interface Props {
  todos: ITodoRecive,
  list: ITodoList,
  onDelete: (todoId: string) => void
}

const TodoList = ({ todos, list, onDelete }: Props) => {
  return (
    <div className={styles.todoList}>
      <p>{list.title}</p>
      <ul>
        {
          todos?.map((todo) =>
            <TodoListItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
            />
          )
        }
      </ul>
    </div>
  )
}

export default TodoList
