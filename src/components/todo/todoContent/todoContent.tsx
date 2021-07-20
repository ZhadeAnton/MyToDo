import React from 'react'

import styles from './todoContent.module.scss'
import * as interfaces from '../../../Interfaces/interfaces'

import TodoList from './todoList/TodoList'
import TodoForm from './todoForm/TodoForm'
import TopBanner from './topBanner/TopBanner'

interface Props {
  todos: interfaces.ArrayOfTodos,
  lists: interfaces.ArrayOfTodoLists,
  currentList: interfaces.ITodoList | undefined,
  selectedTodo: interfaces.ITodo,
  listId: string,
  path: string,
  checkedSort: string,
  onCreateTodo: interfaces.IFnCreateTodo,
  onUpdateTodo: interfaces.IFnUpdateTodo,
  onDeleteTodo: interfaces.IFnDeleteTodo,
  onSelectTodo: interfaces.IFnSelectTodo,
  onCloseSelectedTodo: interfaces.IFnCloseSelectedTodo,
  onSort: interfaces.IFnSortTodos,
  onSubmit: (title: string) => void
}

const TodoContent: React.FC<Props> = (props) => {
  return (
    <div className={styles.todoContent}>
      <TopBanner
        list={props.currentList}
        path={props.path}
        checkedSort={props.checkedSort}
        onSort={props.onSort}
      />

      <TodoList
        list={props.currentList}
        path={props.path}
        todos={props.todos}
        selectedTodo={props.selectedTodo}
        onUpdateTodo={props.onUpdateTodo}
        onSelectTodo={props.onSelectTodo}
      />

      <TodoForm
        listId={props.listId}
        onSubmit={props.onSubmit}
      />
    </div>
  )
}

export default TodoContent
