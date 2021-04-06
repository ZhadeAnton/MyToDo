import React, { useState, useEffect, useContext } from 'react'
import { Spin } from 'antd';

import DBContext from '../../context/db.context'
import { ITodo } from '../../interfaces';

import styles from './todoListContainer.module.scss'
import TodoList from '../../components/todo/todoList/TodoList.component';
import TodoForm from '../../components/todo/todoForm/TodoForm';

interface Props {
  match: {
    params: {
      listId: string
    }
  }
}

const TodoListContainer = ({ match }: Props) => {
  const db = useContext(DBContext)
  const [todos, setTodos] = useState<Array<ITodo>>([])

  useEffect(() => {
    if (!match.params.listId) return
    db.getListsTodos(match.params.listId).then(setTodos)
  }, [db, match.params.listId])

  const list = db.lists?.find((list) => list.id === match.params.listId)

  const handleSubmit = (title: string) => {
    db.createTodo({
      title,
      listId: match.params.listId
    })
        .then((todo: ITodo) => {
          setTodos([...todos, todo])
        })
  }

  const handleDelete = (todoId: string) => {
    db.deleteTodo(todoId)
        .then((todoId: string) => {
          setTodos([...todos.filter((t) => t.id !== todoId)])
        })
  }

  if (!list || !todos) return <Spin />

  return (
    <div className={styles.todoListContainer}>
      <TodoList
        list={list}
        todos={todos}
        onDelete={handleDelete}
      />

      <TodoForm
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default TodoListContainer
