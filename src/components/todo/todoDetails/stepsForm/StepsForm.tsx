import React from 'react'

import styles from './stepsForm.module.scss'
import AddNewItem from '../../../form/addNewItem/AddNewItem'
import { IFnAddTodoStep, ITodo } from '../../../../Interfaces/interfaces'

interface Props {
  selectedTodo: ITodo,
  addTodoStep: IFnAddTodoStep
}

const StepsForm: React.FC<Props> = (props) => {
  const handleAddStep = (title: string) => {
    props.addTodoStep(props.selectedTodo!.id, title)
  }

  return (
    <div
      className={styles.stepsForm}>
      <AddNewItem
        handleSubmit={handleAddStep}>
        Add step
      </AddNewItem>
    </div>
  )
}

export default StepsForm
