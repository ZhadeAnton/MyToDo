import React, { useState, useEffect, useContext } from 'react'
import { Spin } from 'antd';

import DBContext from '../../../context/db.context'
import { ITodoRecive } from '../../../interfaces'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'

interface Props {
  match: {
    params: {
      listId: string
    }
  }
}

const TodoList = ({ match }: Props) => {
  const db = useContext(DBContext)
  const [todos, setTodos] = useState<ITodoRecive>([])

  useEffect(() => {
    db.get('todos')((collection: any) => collection.where(
        'listId', '==', match.params.listId
    )).then(setTodos)
  }, [db, match.params.listId])

  const list = db.lists?.find((list) => list.id === match.params.listId)

  if (!list) return <Spin />

  return (
    <div className={styles.todoList}>
      <p>{list?.title}</p>
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
