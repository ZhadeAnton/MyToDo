import React from 'react'
import moment from 'moment'
import { DeleteOutlined } from '@ant-design/icons'

import styles from './todoDetailsBottomLine.module.scss'
import { ITodo } from '../../../../interfaces'

interface Props {
  todo: ITodo,
  onDeleteTodo: (todoId: string) => void,
  onClose: () => void,
}

const TodoDetailsBottomLine: React.FC<Props> = (props) => {
  const timeStamp = props.todo.timestamp.toDate()

  const handleDeleteTodo = () => {
    props.onDeleteTodo(props.todo.id)
    props.onClose()
  }

  return (
    <div className={styles.bottomLine}>
      <span className={styles.todoDetailsTime}>
        Created&nbsp;
        {
          moment()
              .from(timeStamp, true)
              .toString()
        }
        &nbsp;ago
      </span>

      <span
        className={styles.todoDetailsDeleteIcon}
        onClick={handleDeleteTodo}>
        <DeleteOutlined />
      </span>
    </div>
  )
}

export default TodoDetailsBottomLine
