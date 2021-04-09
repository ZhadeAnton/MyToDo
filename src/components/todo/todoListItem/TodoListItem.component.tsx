import React from 'react'
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './todoListItem.module.scss'

import { ITodo } from '../../../interfaces';

interface Props {
  todo: ITodo,
  onDelete: (todoId: string) => void,
  onChange: (todoId: string, data: {}) => void
}

const TodoListItem = ({ todo, onDelete, onChange }: Props) => {
  function handleChecked(completed: boolean) {
    onChange(todo.id, {completed})
  }

  return (
    <li className={styles.todoItem}>
      <Checkbox
        checked={todo.completed}
        onChange={(e) => handleChecked(e.target.checked)}
      />

      <p>{todo.title}</p>
      <i onClick={() => onDelete(todo.id)}><DeleteOutlined /></i>
    </li>
  )
}

export default TodoListItem
