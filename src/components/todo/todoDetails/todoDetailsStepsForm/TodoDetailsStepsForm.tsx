import React, { useState } from 'react'
import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

import styles from './todoDetailsStepsForm.module.scss'
import { ITodo } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todo: ITodo,
  addTodoStep: TodoListProps['addTodoStep']
}

const TodoDetailsStepsForm: React.FC<Props> = (props) => {
  const [stepTitle, setStepText] = useState('')

  const handleAddStep = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.addTodoStep(props.todo.id, stepTitle)
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
        value={stepTitle}
        onChange={(e) => hanldleStepText(e.target.value)}
      />

      <Button onClick={(e) => handleAddStep(e)}>Add step</Button>
    </form>
  )
}

export default TodoDetailsStepsForm
