import React from 'react';
import {Checkbox} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

import styles from './todoItem.module.scss'
import {ITodo} from '../../../redux/todo/todoInterfaces';

interface Props {
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  key: number,
  todo: ITodo
}

const TodoItem: React.FC<Props> = ({todo, deleteTodo, toggleTodo}) => {
  return (
    <li className={styles.todoItem}>
      <span className={styles.checkBox}>
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </span>
      <span className={styles.description}>
        {todo.title}
      </span>
      <span className={styles.removeIcon}>
        <DeleteOutlined
          onClick={() => deleteTodo(todo.id)}
        />
      </span>
    </li>
  )
}

export default TodoItem
