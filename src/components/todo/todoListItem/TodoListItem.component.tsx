import React from 'react'
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import styles from './todoListItem.module.scss'
import { ITodo } from '../../../interfaces';

interface Props {
  todo: ITodo,
  deleteTodo: (todo: string) => void,
  updateTodo: (todoId: string, data: {}) => void,
  onSelect: (todo: ITodo) => void
}

const TodoListItem: React.FC<Props> = (props) => {
  function handleChecked(completed: boolean) {
    props.updateTodo(props.todo.id, {completed})
  }

  return (
    <li className={styles.todoItem}>
      <Checkbox
        checked={props.todo.completed}
        onChange={(e) => handleChecked(e.target.checked)}
      />

      <p onClick={() => props.onSelect(props.todo)}>{props.todo.title}</p>
      <div
        onClick={() => props.deleteTodo(props.todo.id)}>
        <DeleteOutlined /></div>
    </li>
  )
}

export default TodoListItem
