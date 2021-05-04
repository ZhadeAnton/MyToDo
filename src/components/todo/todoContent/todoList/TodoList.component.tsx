import React, { useEffect } from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todos: TodoListProps['todos'],
  selectedTodo: TodoListProps['selectedTodo'],
  updateTodo: TodoListProps['updateTodo'],
  onSelectTodo: TodoListProps['selectTodo'],
}

const TodoList: React.FC<Props> = (props) => {
  useEffect(() => {
  }, [props.todos])

  return (
    <ul className={styles.todoList}>
      {
        props.todos.map((todo) =>
          <TodoListItem
            key={todo.id}
            todo={todo}
            selectedTodo={props.selectedTodo}
            updateTodo={props.updateTodo}
            onSelectTodo={props.onSelectTodo}
          />
        )
      }
    </ul>
  )
}

export default TodoList
