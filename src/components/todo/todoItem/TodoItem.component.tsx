import React from 'react';
import {Checkbox} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

import styles from './todoItem.module.scss'

interface Props {
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  completed: boolean,
   title: string,
   id: number
}

const TodoItem = (props: Props) => {
  return (
    <div className={styles.todoItem}>
      <span className={styles.checkBox}>
        <Checkbox
          checked={props.completed}
          onChange={() => props.toggleTodo(props.id)}
        />
      </span>
      <span className={styles.description}>
        {props.title}
      </span>
      <span className={styles.removeIcon}>
        <DeleteOutlined
          onClick={() => props.deleteTodo(props.id)}
        />
      </span>
    </div>
  )
}

export default TodoItem
