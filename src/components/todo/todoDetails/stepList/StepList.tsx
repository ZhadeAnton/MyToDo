import React from 'react'
import { List } from 'antd';


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
    <List
      className={styles.stepList}
      dataSource={props.selectedTodo?.steps}
      pagination={{
        pageSize: 5,
        hideOnSinglePage: true,
        className: 'todoDetailsStepsList-pagination'
      }}
      renderItem={(step: ITodoStep, idx: number) => (
        <StepItem
          key={idx}
          step={step}
          selectedTodo={props.selectedTodo}
          deleteTodoStep={props.deleteTodoStep}
        />
      )}
    />
  )
}

export default StepsList
