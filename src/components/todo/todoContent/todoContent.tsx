import React, { useState } from 'react'

import styles from './todoContent.module.scss'
import { ICreatedTodo, ITodo, ITodoList } from '../../../interfaces'
import TodoList from '../todoList/TodoList.component'
import TodoForm from '../todoForm/TodoForm'
import TodoDetails from '../todoDetails/TodoDetails'

interface Props {
  todos: Array<ITodo>,
  lists: ITodoList[],
  listId: string,
  currentList: ITodoList | undefined,
  userId: string,
  getTodos: (listId: string) => void,
  createTodo: ({}: ICreatedTodo) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todoId: string) => void
  handleSubmit: (title: string) => void
}

const TodoContent: React.FC<Props> = (props) => {
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null)

  const handleSelect = (todo: ITodo) => {
    setSelectedTodo(todo)
  }

  const handleCloseDetail = () => {
    setSelectedTodo(null)
  }

  return (
    <div className={styles.todoContent}>
      <div className={styles.todoTasksWrapper}>
        <TodoList
          list={props.currentList}
          todos={props.todos}
          updateTodo={props.updateTodo}
          handleSelect={handleSelect}
        />

        <div className={styles.todoContentForm}>
          <TodoForm
            listId={props.listId}
            onSubmit={props.handleSubmit}
          />
        </div>
      </div>

      <div className={styles.todoDetails}>
        { selectedTodo &&
          <TodoDetails
            todo={selectedTodo}
            onClose={handleCloseDetail}
            onDelete={props.deleteTodo}
            onUpdate={props.updateTodo}
          />
        }
      </div>
    </div>
  )
}


export default TodoContent
