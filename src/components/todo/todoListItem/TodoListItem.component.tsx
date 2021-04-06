import React from 'react'
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './todoListItem.module.scss'

import { ITodo } from '../../../interfaces';

interface Props {
  todo: ITodo,
  onDelete: (todoId: string) => void
}

const TodoListItem = ({ todo, onDelete }: Props) => {
  return (
    <li className={styles.todoItem}>
      <Checkbox />
      <p>{todo.title}</p>
      <i onClick={() => onDelete(todo.id)}><DeleteOutlined /></i>
    </li>
  )
}

export default TodoListItem
