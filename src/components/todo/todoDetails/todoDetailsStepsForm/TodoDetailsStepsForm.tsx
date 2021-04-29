import React from 'react'

import styles from './todoDetailsStepsForm.module.scss'
import { ITodo } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import AddNewItem from '../../../form/addNewItem/AddNewItem'

interface Props {
  todo: ITodo,
  addTodoStep: TodoListProps['addTodoStep']
}

const TodoDetailsStepsForm: React.FC<Props> = (props) => {
  const handleAddStep = (title: string) => {
    props.addTodoStep(props.todo.id, title)
  }

  return (
    <div
      className={styles.stepsForm}>
      <AddNewItem
        handleSubmit={handleAddStep}
      >
        Add step</AddNewItem>

    </div>
  )
}

export default TodoDetailsStepsForm
