import React, { useEffect } from 'react'

import styles from './todoDetailsStepList.module.scss'
import { ITodo, ITodoStep } from '../../../../interfaces'
import TodoDetailsStepItem from '../todoDetailsStepItem/TodoDetailsStepItem'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

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
            <TodoDetailsStepItem
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
