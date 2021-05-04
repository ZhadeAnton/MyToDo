import React from 'react'
import { Pagination } from 'antd';

import styles from './todoList.module.scss'
import TodoListItem from '../todoListItem/TodoListItem'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todos: TodoListProps['todos'],
  selectedTodo: TodoListProps['selectedTodo'],
  updateTodo: TodoListProps['updateTodo'],
  onSelectTodo: TodoListProps['selectTodo'],
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <>
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

      <Pagination
        defaultCurrent={1}
        total={props.todos.length}
        pageSize={5}
        showLessItems
        hideOnSinglePage
        responsive
      />
    </>
  )
}

export default TodoList
