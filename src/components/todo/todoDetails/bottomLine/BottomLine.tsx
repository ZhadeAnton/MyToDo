import React from 'react'
import moment from 'moment'
import { DeleteOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd';

import styles from './bottomLine.module.scss'
import { ITodo } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todo: ITodo,
  onDeleteTodo: TodoListProps['deleteTodo'],
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
      <span>
        Created&nbsp;
        {
          moment()
              .from(timeStamp, true)
              .toString()
        }
        &nbsp;ago
      </span>

      <Tooltip placement="topRight" title="Delete todo">
        <span onClick={handleDeleteTodo}>
          <DeleteOutlined />
        </span>
      </Tooltip>
    </div>
  )
}

export default TodoDetailsBottomLine
