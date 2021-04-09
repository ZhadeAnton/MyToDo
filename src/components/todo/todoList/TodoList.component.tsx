import React from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoRecive, ITodoList } from '../../../interfaces'

interface Props {
  todos: ITodoRecive,
  lists: ITodoList,
  onDelete: (todoId: string) => void,
  onChange: (todoId: string, data: {}) => void
}

const TodoList = ({ todos, lists, onDelete, onChange }: Props) => {
  return (
    <div className={styles.todoList}>
      <p>{lists.title}</p>
      <ul>
        {
          todos?.map((todo) =>
            <TodoListItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onChange={onChange}
            />
          )
        }
      </ul>
    </div>
  )
}

export default TodoList
