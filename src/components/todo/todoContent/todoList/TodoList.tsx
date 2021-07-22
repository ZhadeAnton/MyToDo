import React from 'react'
import { List } from 'antd';

import styles from './todoList.module.scss'
import * as interfaces from '../../../../Interfaces/TodoInterfaces';

import TodoListItem from '../todoListItem/TodoListItem'
import EmptyList from '../emptyList/Emptylist';
import { IUser } from '../../../../Interfaces/UserInterfaces';

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
  return (
    <>
      {
       props.todos.length > 0
       ?
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
