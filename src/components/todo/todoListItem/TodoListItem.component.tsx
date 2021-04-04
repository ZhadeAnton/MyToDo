import React from 'react'
import { Checkbox } from 'antd';

import styles from './todoListItem.module.scss'

import { ITodo } from '../../../interfaces';

interface Props {
  todo: ITodo
}

const TodoListItem = ({ todo }: Props) => {
  return (
    <li className={styles.todoItem}>
      <Checkbox />
      <p>{todo.title}</p>
    </li>
  )
}

export default TodoListItem
