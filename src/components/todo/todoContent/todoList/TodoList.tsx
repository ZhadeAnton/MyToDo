import React from 'react'
import { List } from 'antd';

import styles from './todoList.module.scss'
import * as interfaces from '../../../../Interfaces/TodoInterfaces';
import { IUser } from '../../../../Interfaces/UserInterfaces';
import useWindowDimensions from '../../../../Hooks/useWindowDimensions';
import EmptyList from '../emptyList/Emptylist';
import TodoListItem from '../todoListItem/TodoListItem'

interface Props {
  userId: IUser['id'],
  list: interfaces.ITodoList | undefined,
  path: string,
  todos: interfaces.ArrayOfTodos,
  selectedTodo: interfaces.ITodo,
  onUpdateTodo: interfaces.IFnUpdateTodo,
  onSelectTodo: interfaces.IFnSelectTodo,
}

const TodoList: React.FC<Props> = (props) => {
  const dimensions = useWindowDimensions()
  const pageSize = dimensions.width < 992 ? 7 : 8

  return (
    <>
      {
       props.todos.length > 0
       ?
        <List
          className={styles.todoList}
          dataSource={props.todos}
          pagination={{
            pageSize,
            hideOnSinglePage: true,
            responsive: true,
            className: 'todoContentList-pagination'
          }}
          renderItem={(todo: any) => (
            <TodoListItem
              dimensions={dimensions}
              key={todo.id}
              userId={props.userId}
              todo={todo}
              selectedTodo={props.selectedTodo}
              onUpdateTodo={props.onUpdateTodo}
              onSelectTodo={props.onSelectTodo}
            />
          )}
        />
      :
        <div className={styles.emptyList}>
          <EmptyList
            path={props.path}
            list={props.list}
          />
        </div>
      }
    </>
  )
}

export default TodoList
