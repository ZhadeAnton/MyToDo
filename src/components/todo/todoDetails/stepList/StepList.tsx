import React from 'react'
import { List } from 'antd';

import StepItem from '../stepItem/StepItem'
import { ITodo, ITodoStep } from '../../../../Interfaces/TodoInterfaces'
import useWindowDimensions from '../../../../Hooks/useWindowDimensions';

interface Props {
  selectedTodo: ITodo,
  deleteTodoStep: (todoId: ITodo['id'], step: ITodoStep) => void
}

const StepsList: React.FC<Props> = (props) => {
  const dimension = useWindowDimensions()
  const height = dimension.width < 992 ? 270 : 310

  return (
    <List
      dataSource={props.selectedTodo?.steps}
      style={{
        height: height + 'px'
      }}
      pagination={{
        pageSize: 5,
        hideOnSinglePage: true,
        responsive: true,
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
