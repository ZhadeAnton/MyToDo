import React from 'react'
import { Pagination } from 'antd';

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem.component'
import { ITodoList, ITodo } from '../../../interfaces'

interface Props {
  todos: Array<ITodo>,
  list: ITodoList,
  deleteTodo: (todo: ITodo) => void,
  updateTodo: (todoId: string, data: {}) => void,
  handleSelect: (todo: ITodo) => void,
}

const TodoList = ({
  todos,
  list,
  deleteTodo,
  updateTodo,
  handleSelect,
  // Todo: I'm not like this realization with Props...
}: Props) => {
  const todosLenght = todos?.length
  return (
    <div className={styles.todoList}>
      <p>{list.title}</p>
      <ul>
        {
          todos?.map((todo) =>
            <TodoListItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              onSelect={handleSelect}
            />
          )
        }
      </ul>
      <Pagination defaultCurrent={1} total={todosLenght} />
    </div>
  )
}

export default TodoList
