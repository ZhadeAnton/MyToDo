import React from 'react'

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoList, ITodo } from '../../../interfaces'

interface Props {
  todos: Array<ITodo>,
  list: ITodoList,
  deleteTodo: (todo: string) => void,
  updateTodo: (todoId: string, data: {}) => void,
  handleSelect: (todo: ITodo) => void,
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <div className={styles.todoList}>
      <div className={styles.title}>
        <p>{props.list.title}</p>
      </div>
      <ul>
        {
          props.todos?.map((todo) =>
            <TodoListItem
              key={todo.id}
              todo={todo}
              deleteTodo={props.deleteTodo}
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
