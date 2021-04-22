import React, { useState } from 'react'
import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import firebase from 'firebase'

import styles from './todoDetailsStepsForm.module.scss'
import { ITodo } from '../../../../interfaces'

interface Props {
  todo: ITodo,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetailsStepsForm: React.FC<Props> = (props) => {
  const [stepText, setStepText] = useState('')

  const handleStepSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onUpdate(props.todo.id,
        {steps: firebase.firestore.FieldValue.arrayUnion(stepText)})
    setStepText('')
  }

  const hanldleStepText = (value: string) => {
    setStepText(value)
  }

  return (
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
  )
}

export default TodoDetailsStepsForm
