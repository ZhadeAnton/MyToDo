import React from 'react'

import styles from './stepsForm.module.scss'
import AddNewItem from '../../../form/AddNewItem/AddNewItem'
import { ITodo, IAddTodoStep } from '../../../../Interfaces/TodoInterfaces'

interface Props {
  selectedTodo: ITodo,
  onAddTodoStep: (todoId: ITodo['id'], step: IAddTodoStep) => void
}

const StepsForm: React.FC<Props> = (props) => {
  const handleAddStep = (step: IAddTodoStep) => {
    props.onAddTodoStep(props.selectedTodo.id, step)
  }

  return (
    <div
      className={styles.stepsForm}>
      <AddNewItem
        todoId={props.selectedTodo.id}
        handleSubmit={handleAddStep}>
        Add step
      </AddNewItem>
    </div>
  )
}

export default StepsForm
