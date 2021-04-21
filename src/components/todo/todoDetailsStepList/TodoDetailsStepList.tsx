import React from 'react'
import { Divider } from 'antd'

import styles from './todoDetailsStepList.module.scss'
import { ITodo } from '../../../interfaces'
import TodoDetailsStepItem from '../todoDetailsStepItem/TodoDetailsStepItem'

interface Props {
  todo: ITodo,
  onStepDelete: (step: any) => void
}

const TodoDetailsStepList: React.FC<Props> = (props) => {
  return (
    <ul className={styles.stepList}>
      <Divider />
      Steps :
      {
        props.todo.steps?.map((step, idx) => {
          return (
            <TodoDetailsStepItem
              key={idx}
              step={step}
              onStepDelete={props.onStepDelete}
            />
          )
        })
      }
      <Divider />
    </ul>
  )
}

export default TodoDetailsStepList
