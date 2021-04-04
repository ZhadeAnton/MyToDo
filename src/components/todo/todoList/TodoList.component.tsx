import React, { useContext } from 'react'

import styles from './todoList.module.scss'

import DBContext from '../../../context/db.context'

interface Props {
  match: string
}

const TodoList = ({ match }: Props) => {
  console.log(match)
  const db = useContext(DBContext)

  return (
    <div className={styles.todoList}>
      <ul>
        {
          db.todos?.map((todo) =>
            <li key={todo.id}>{todo.title}</li>
          )
        }
      </ul>
    </div>
  )
}

export default TodoList
