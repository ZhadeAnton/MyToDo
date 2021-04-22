import React from 'react'
import { Divider } from 'antd'

import styles from './todoDetailsStepList.module.scss'
import { ITodo } from '../../../../interfaces'
import TodoDetailsStepItem from '../todoDetailsStepItem/TodoDetailsStepItem'
import firebase from 'firebase'

interface Props {
  todo: ITodo,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetailsStepList: React.FC<Props> = (props) => {
  const handleStepRemove = (step: any) => {
    props.onUpdate(props.todo.id,
        {steps: firebase.firestore.FieldValue.arrayRemove(step)})
  }

  return (
    <ul className={styles.stepList}>
      <Divider />
      Steps :
      {
        props.todo.steps?.map((step, idx) => {
          return (
            <TodoDetailsStepItem
              key={idx}
              step={step}
              onStepDelete={handleStepRemove}
            />
          )
        })
      }
      <Divider />
    </ul>
  )
}

export default TodoDetailsStepList
