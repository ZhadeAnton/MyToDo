import React from 'react'

import styles from './todoContent.module.scss'
import TodoList from './todoList/TodoList.component'
import TodoForm from './todoForm/TodoForm'
import { TodoListProps } from '../../../containers/TodoPageContainer'
import { ITodoList } from '../../../interfaces'

interface Props {
  listId: string,
  path: string,
  userId: string,
  currentList: ITodoList | undefined,
  selectedTodo: TodoListProps['selectedTodo'],
  handleSubmit: (title: string) => void,
  todos: TodoListProps['todos'],
  lists: TodoListProps['lists'],
  getTodos: TodoListProps['getTodos'],
  createTodo: TodoListProps['createTodo'],
  updateTodo: TodoListProps['updateTodo'],
  deleteTodo: TodoListProps['deleteTodo'],
  onSelectTodo: TodoListProps['selectedTodo'],
  onCloseSelectedTodo: TodoListProps['closeSelectedTodo']
}

const TodoContent: React.FC<Props> = (props) => {
  return (
    <div className={styles.todoContent}>
      <TodoList
        todos={props.todos}
        list={props.currentList}
        path={props.path}
        selectedTodo={props.selectedTodo}
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
