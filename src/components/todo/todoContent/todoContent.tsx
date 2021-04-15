import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'

import styles from './todoContent.module.scss'
import { ICreateTodo, ITodo, ITodoList } from '../../../interfaces'
import TodoList from '../todoList/TodoList.component'
import TodoForm from '../todoForm/TodoForm'
import TodoDetails from '../todoDetails/TodoDetails'

interface Props {
  match: {
    params: {
      listid: string
    }
  }
  todos: Array<ITodo>,
  lists: ITodoList[],
  getTodos: (listId: string) => void,
  createTodo: ({title, listId}: ICreateTodo) => any,
  updateTodo: (todoId: string, data: {}) => any
  deleteTodo: (todo: ITodo) => any
}

const TodoContent = ({
  match,
  todos,
  lists,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
}: Props) => {
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null)
  const listId = match.params.listid

  useEffect(() => {
    getTodos(listId)
  }, [listId])

  const currentList =
  lists?.find((list: ITodoList) => list.id === listId)

  const handleSubmit = (title: string) => {
    createTodo({
      title,
      listId
    })
  }

  const handleSelect = (todo: ITodo) => {
    setSelectedTodo(todo)
  }

  const handleCloseDetail = () => {
    setSelectedTodo(null)
  }

  if (!currentList || !todos) return <Spin />

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoSection}>
        <TodoList
          list={currentList}
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          handleSelect={handleSelect}
        />

        <TodoForm
          onSubmit={handleSubmit}
        />
      </div>

      <div className={styles.todoDetails}>
        { selectedTodo &&
          <TodoDetails
            todo={selectedTodo}
            onClose={handleCloseDetail}
          />
        }
      </div>
    </div>
  )
}


export default TodoContent
