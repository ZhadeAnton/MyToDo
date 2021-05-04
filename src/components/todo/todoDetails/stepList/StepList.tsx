import React from 'react'

import styles from './stepList.module.scss'
import { ITodoStep } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import StepItem from '../stepItem/StepItem'

interface Props {
  selectedTodo: TodoListProps['selectedTodo'],
  deleteTodoStep: TodoListProps['deleteTodoStep'],
}

const StepsList: React.FC<Props> = (props) => {
  return (
    <ul className={styles.stepList}>
      {
        props.selectedTodo!.steps.map((step: ITodoStep, idx: number) => {
          return (
            <StepItem
              key={idx}
              step={step}
              selectedTodo={props.selectedTodo}
              deleteTodoStep={props.deleteTodoStep}
            />
          )
        })
      }
    </ul>
  )
}

export default StepsList
