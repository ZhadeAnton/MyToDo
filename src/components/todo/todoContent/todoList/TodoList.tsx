import React from 'react'
import { List } from 'antd';

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
    <List
      className={styles.todoList}
      dataSource={props.todos}
      pagination={{
        pageSize: 8,
        hideOnSinglePage: true,
        className: 'todoContentList-pagination'
      }}
      renderItem={(todo: any) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          selectedTodo={props.selectedTodo}
          updateTodo={props.updateTodo}
          onSelectTodo={props.onSelectTodo}
        />
      )}
    />
  )
}

export default TodoList
