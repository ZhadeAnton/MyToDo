import React, { useEffect } from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoList, ITodo } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todos: Array<ITodo>,
  list: ITodoList | undefined,
  path: string,
  selectedTodo: TodoListProps['selectedTodo'],
  updateTodo: (todoId: string, data: {}) => void,
  handleSelect: (todo: ITodo) => void,
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
              onSelect={props.handleSelect}
            />
          )
        }
      </ul>
    </div>
  )
}

export default TodoList
