import React, { useEffect } from 'react'
import { Divider } from 'antd'

import styles from './todoDetailsStepList.module.scss'
import { ITodo, ITodoStep } from '../../../../interfaces'
import TodoDetailsStepItem from '../todoDetailsStepItem/TodoDetailsStepItem'

interface Props {
  todo: ITodo,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetailsStepList: React.FC<Props> = (props) => {
  useEffect(() => {
  }, [props.todo])

  return (
    <ul className={styles.stepList}>
      <Divider />
      Steps :
      {
        props.todo.steps?.map((step: ITodoStep, idx) => {
          return (
            <TodoDetailsStepItem
              key={idx}
              todo={props.todo}
              step={step}
              onUpdate={props.onUpdate}
            />
          )
        })
      }
      <Divider />
    </ul>
  )
}

export default TodoDetailsStepList
