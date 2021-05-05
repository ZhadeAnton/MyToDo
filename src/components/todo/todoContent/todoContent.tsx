import React from 'react'

import styles from './todoContent.module.scss'
import { ITodoList } from '../../../interfaces'
import { TodoListProps } from '../../../containers/TodoPageContainer'
import TodoList from './todoList/TodoList'
import TodoForm from './todoForm/TodoForm'
import TopBanner from './topBanner/TopBanner'

interface Props {
  listId: string,
  path: string,
  userId: string,
  checkedSort: string,
  currentList: ITodoList | undefined,
  handleSubmit: (title: string) => void,
  handleSortChange: (sort: string) => void,
  todos: TodoListProps['todos'],
  lists: TodoListProps['lists'],
  getTodos: TodoListProps['getTodos'],
  createTodo: TodoListProps['createTodo'],
  updateTodo: TodoListProps['updateTodo'],
  deleteTodo: TodoListProps['deleteTodo'],
  onSelectTodo: TodoListProps['selectTodo'],
  selectedTodo: TodoListProps['selectedTodo'],
  onCloseSelectedTodo: TodoListProps['closeSelectedTodo']
}

const TodoContent: React.FC<Props> = (props) => {
  return (
    <div className={styles.todoContent}>
      <TopBanner
        list={props.currentList}
        path={props.path}
        checkedSort={props.checkedSort}
        handleSortChange={props.handleSortChange}
      />

      <TodoList
        todos={props.todos}
        selectedTodo={props.selectedTodo}
        updateTodo={props.updateTodo}
        onSelectTodo={props.onSelectTodo}
      />

      <TodoForm
        listId={props.listId}
        onSubmit={props.handleSubmit}
      />
    </div>
  )
}


export default TodoContent
