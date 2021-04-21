import React, {useState, useEffect} from 'react'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import moment from 'moment'

import styles from './todoDetails.module.scss'
import { ITodo } from '../../../interfaces'
import { Button } from 'antd'

interface Props {
  todo: ITodo,
  onClose: () => void,
  onDelete: (todoId: string) => void,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetails: React.FC<Props> = (props) => {
  const [todoText, setTodoText] = useState('')
  const timeStamp = props.todo.timestamp.toDate()

  useEffect(() => {
    setTodoText(props.todo.title)
  }, [props.todo])

  const handleChange = (value: string) => {
    setTodoText(value)
  }

  const handleDeleteTodo = () => {
    props.onDelete(props.todo.id)
    props.onClose()
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onUpdate(props.todo.id, {title: todoText})
    setTodoText('')
  }

  return (
    <aside className={styles.todoDetails}>
      <div className={styles.topLine}>
        <h3>Todo details</h3>
        <span className={styles.closeBtn}>
          <i onClick={props.onClose}><CloseOutlined /></i>
        </span>
      </div>

      <form>
        <Input
          value={todoText}
          onChange={(e) => handleChange(e.target.value)}
          onPressEnter={(e) => handleSubmit(e)}
          autoFocus
          allowClear
        />

        <Button
          onClick={(e) => handleSubmit(e)}
        >Confirm</Button>
      </form>

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
          onClick={() => handleDeleteTodo()}>
          <DeleteOutlined />
        </span>
      </div>
    </aside>
  )
}

export default TodoDetails
