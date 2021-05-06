import React from 'react'

import styles from './stepsForm.module.scss'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import AddNewItem from '../../../form/addNewItem/AddNewItem'

interface Props {
  selectedTodo: TodoListProps['selectedTodo'],
  addTodoStep: TodoListProps['addTodoStep']
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
