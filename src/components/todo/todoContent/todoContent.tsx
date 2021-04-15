import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'

import styles from './todoContent.module.scss'
import { ITodo, ITodoList } from '../../../interfaces'
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
  getTodos: (listId: string) => any,
  createTodo: (title: string, listId: string) => any,
  updateTodo: (todoId: string, data: {}) => any
  deleteTodo: (todo: ITodo) => any
}

const TodoContent: React.FC<Props> = (props) => {
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null)
  const listId = props.match.params.listid

  useEffect(() => {
    props.getTodos(listId)
  }, [listId])

  const currentList =
  props.lists?.find((list: ITodoList) => list.id === listId)

  const handleSubmit = (title: string) => {
    props.createTodo(title, listId)
  }

  const handleSelect = (todo: ITodo) => {
    setSelectedTodo(todo)
  }

  const handleCloseDetail = () => {
    setSelectedTodo(null)
  }

  if (!currentList || !props.todos) return <Spin />

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoSection}>
        <TodoList
          list={currentList}
          todos={props.todos}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
          handleSelect={handleSelect}
        />

        <TodoForm
          listId={listId}
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
