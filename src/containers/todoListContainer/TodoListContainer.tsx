import React, { useEffect } from 'react'
import { Spin } from 'antd';

import useApi from '../../hooks/api'

import styles from './todoListContainer.module.scss'
import { ITodoList } from '../../interfaces';
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
  const { data: { lists, todos }, actions } = useApi()
  const listId = match.params.listId

  useEffect(() => {
    actions.getListTodos(listId)
  }, [actions, listId])

  const currentList =
  lists?.find((list: ITodoList) => list.id === match.params.listId)

  const handleSubmit = (title: string) => {
    actions.createTodo({
      title,
      listId
    })
  }

  const handleDelete = (todoId: string) => {
    actions.deleteTodo(todoId)
  }

  const handleChange = (todoId: string, data: {}) => {
    actions.updateTodo(todoId, data)
  }

  if (!currentList || !todos) return <Spin />

  return (
    <div className={styles.todoListContainer}>
      <TodoList
        lists={currentList}
        todos={todos}
        onDelete={handleDelete}
        onChange={handleChange}
      />

      <TodoForm
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default TodoListContainer
