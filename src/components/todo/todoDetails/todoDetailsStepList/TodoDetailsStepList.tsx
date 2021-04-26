import React from 'react'
import { Divider } from 'antd'

import styles from './todoDetailsStepList.module.scss'
import { ITodo, ITodoStep } from '../../../../interfaces'
import TodoDetailsStepItem from '../todoDetailsStepItem/TodoDetailsStepItem'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  todo: ITodo,
  deleteTodoStep: TodoListProps['deleteTodoStep'],
}

const TodoDetailsStepList: React.FC<Props> = (props) => {
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
              deleteTodoStep={props.deleteTodoStep}
            />
          )
        })
      }
      <Divider />
    </ul>
  )
}

export default TodoDetailsStepList
