import React, {useState, useEffect} from 'react'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import moment from 'moment'
import firebase from 'firebase'

import styles from './todoDetails.module.scss'
import { ITodo } from '../../../interfaces'
import { Button } from 'antd'
import TodoDetailsStepList from '../todoDetailsStepList/TodoDetailsStepList';

const { TextArea } = Input;

interface Props {
  todo: ITodo,
  onClose: () => void,
  onDelete: (todoId: string) => void,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetails: React.FC<Props> = (props) => {
  const [todoText, setTodoText] = useState('')
  const [stepText, setStepText] = useState('')
  const timeStamp = props.todo.timestamp.toDate()

  useEffect(() => {
    setTodoText(props.todo.title)
    console.log('rerender!!!!')
  }, [props.todo])

  const handleChange = (value: string) => {
    setTodoText(value)
  }

  const hanldleStepText = (value: string) => {
    setStepText(value)
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

  const handleStepSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onUpdate(props.todo.id,
        {steps: firebase.firestore.FieldValue.arrayUnion(stepText)})
    setStepText('')
  }

  const handleStepRemove = (step: any) => {
    props.onUpdate(props.todo.id,
        {steps: firebase.firestore.FieldValue.arrayRemove(step)})
  }

  return (
    <aside className={styles.todoDetails}>
      <div className={styles.topLine}>
        <h3>Todo details</h3>
        <span className={styles.closeBtn}>
          <i onClick={props.onClose}><CloseOutlined /></i>
        </span>
      </div>

      <form className={styles.todoTextForm}>
        <Input
          value={todoText}
          onChange={(e) => handleChange(e.target.value)}
          onPressEnter={(e) => handleSubmit(e)}
          autoFocus
          allowClear
        />

        <Button onClick={(e) => handleSubmit(e)}>Confirm</Button>
      </form>

      <TodoDetailsStepList
        todo={props.todo}
        onStepDelete={handleStepRemove}
      />

      <form className={styles.stepsForm}>
        Add step
        <TextArea
          showCount
          maxLength={100}
          value={stepText}
          onChange={(e) => hanldleStepText(e.target.value)}
        />

        <Button onClick={(e) => handleStepSubmit(e)}>Confirm</Button>
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
