import React from 'react'
import { Pagination } from 'antd';

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
  const todosLenght = props.todos?.length
  return (
    <div className={styles.todoList}>
      <p>{props.list.title}</p>
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
      <Pagination defaultCurrent={1} total={todosLenght} />
    </div>
  )
}

export default TodoList
