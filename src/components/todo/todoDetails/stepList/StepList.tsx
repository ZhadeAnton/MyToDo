import React, { useEffect } from 'react'

import styles from './stepList.module.scss'
import { ITodo, ITodoStep } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import StepItem from '../stepItem/StepItem'

interface Props {
  todo: ITodo,
  deleteTodoStep: TodoListProps['deleteTodoStep'],
}

const TodoDetailsStepList: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log('render list')
  }, [props.todo])

  return (
    <ul className={styles.stepList}>
      {
        props.todo.steps?.map((step: ITodoStep, idx) => {
          return (
            <StepItem
              key={idx}
              todo={props.todo}
              step={step}
              deleteTodoStep={props.deleteTodoStep}
            />
          )
        })
      }
    </ul>
  )
}

export default TodoDetailsStepList
