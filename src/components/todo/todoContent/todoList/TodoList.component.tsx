import React, { useEffect } from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoList } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todos: TodoListProps['todos'],
  list: ITodoList | undefined,
  path: string,
  selectedTodo: TodoListProps['selectedTodo'],
  updateTodo: TodoListProps['updateTodo'],
  onSelectTodo: TodoListProps['selectTodo'],
}

const TodoList: React.FC<Props> = (props) => {
  useEffect(() => {
  }, [props.todos])

  return (
    <div className={styles.todoList}>
      <p className={styles.title}>
        {props.list?.title || `${props.path.slice(6)}`}
      </p>

      <ul>
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
    </div>
  )
}

export default TodoList
