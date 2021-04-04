import React, { useState, useEffect, useContext } from 'react'
import { Spin } from 'antd';

import DBContext from '../context/db.context'
import { ITodoRecive } from '../interfaces';
import TodoList from '../components/todo/todoList/TodoList.component';


interface Props {
  match: {
    params: {
      listId: string
    }
  }
}

const TodoListContainer = ({ match }: Props) => {
  const db = useContext(DBContext)
  const [todos, setTodos] = useState<ITodoRecive>([])

  useEffect(() => {
    db.get('todos')((collection: any) => collection.where(
        'listId', '==', match.params.listId
    )).then(setTodos)
  }, [db, match.params.listId])

  const list = db.lists?.find((list) => list.id === match.params.listId)

  if (!list || !todos) return <Spin />

  return (
    <TodoList
      list={list}
      todos={todos}
    />
  )
}

export default TodoListContainer
