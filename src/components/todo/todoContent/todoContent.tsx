import React from 'react'

import styles from './todoContent.module.scss'
import { IUpdatedTodo, ITodo, ITodoList } from '../../../interfaces'
import TodoList from './todoList/TodoList.component'
import TodoForm from './todoForm/TodoForm'

interface Props {
  todos: Array<ITodo>,
  lists: ITodoList[],
  listId: string,
  path: string,
  currentList: ITodoList | undefined,
  userId: string,
  getTodos: (listId: string) => void,
  createTodo: ({}: IUpdatedTodo) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todoId: string) => void
  handleSubmit: (title: string) => void,
  onSelectTodo: (todo: ITodo) => void
}

const TodoContent: React.FC<Props> = (props) => {
  return (
    <div className={styles.todoContent}>
      <TodoList
        list={props.currentList}
        todos={props.todos}
        path={props.path}
        updateTodo={props.updateTodo}
        handleSelect={props.onSelectTodo}
      />

      <div className={styles.todoContentForm}>
        <TodoForm
          listId={props.listId}
          onSubmit={props.handleSubmit}
        />
      </div>
    </div>
  )
}


export default TodoContent
