import React from 'react'
import { List } from 'antd';

import styles from './todoList.module.scss'
import { ITodoList } from '../../../../interfaces';
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import TodoListItem from '../todoListItem/TodoListItem'
import EmptyList from '../emptyList/Emptylist';

interface Props {
  list: ITodoList | undefined,
  path: string,
  todos: TodoListProps['todos'],
  selectedTodo: TodoListProps['selectedTodo'],
  updateTodo: TodoListProps['updateTodo'],
  onSelectTodo: TodoListProps['selectTodo'],
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <>
      {
       props.todos.length > 0 ?
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
