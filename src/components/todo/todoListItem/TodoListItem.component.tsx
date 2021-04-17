import React from 'react'
import { Checkbox } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

import styles from './todoListItem.module.scss'
import { ITodo } from '../../../interfaces';

interface Props {
  todo: ITodo,
  updateTodo: (todoId: string, data: {}) => void,
  onSelect: (todo: ITodo) => void
}

const TodoListItem: React.FC<Props> = (props) => {
  function handleChecked(completed: boolean) {
    props.updateTodo(props.todo.id, {completed})
  }

  function handleImportant(important: boolean) {
    props.updateTodo(props.todo.id, {important: !important})
  }

  return (
    <li className={styles.todoListItem}>
      <span className={styles.checkbox}>
        <Checkbox
          checked={props.todo.completed}
          onChange={(e) => handleChecked(e.target.checked)}
        />
      </span>

      <div className={styles.text}
        onClick={() => props.onSelect(props.todo)}
      >
        <p>{props.todo.title}</p>
      </div>

      <div className={styles.starIcon}
        onClick={() => handleImportant(props.todo.important)}
      >
        {
          props.todo.important ? <StarFilled /> : <StarOutlined />
        }
      </div>
    </li>
  )
}

export default TodoListItem
