import React from 'react'
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './todoListItem.module.scss'

import { ITodo } from '../../../interfaces';

interface Props {
  todo: ITodo,
  deleteTodo: (todo: ITodo) => void,
  updateTodo: (todoId: string, data: {}) => void,
  onSelect: (todo: ITodo) => void
}

const TodoListItem = ({
  todo,
  deleteTodo,
  updateTodo,
  onSelect,
  // Todo: looks terable...
}: Props) => {
  function handleChecked(completed: boolean) {
    updateTodo(todo.id, {completed})
  }

  return (
    <li className={styles.todoItem}>
      <Checkbox
        checked={todo.completed}
        onChange={(e) => handleChecked(e.target.checked)}
      />

      <p onClick={() => onSelect(todo)}>{todo.title}</p>
      <div onClick={() => deleteTodo(todo)}><DeleteOutlined /></div>
    </li>
  )
}

export default TodoListItem
