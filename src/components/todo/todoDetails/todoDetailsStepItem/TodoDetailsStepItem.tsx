import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd';

import styles from './todoDetailsStepItem.module.scss'
import { TodoListProps } from '../../../../containers/TodoPageContainer';
import { ITodo, ITodoStep } from '../../../../interfaces';

interface Props {
  todo: ITodo,
  step: ITodoStep,
  deleteTodoStep: TodoListProps['deleteTodoStep']
}

const TodoDetailsStepItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.stepItem}>
      <Checkbox
      />
      <span>
        {props.step.stepTitle}
      </span>

      <i
        onClick={() => props.deleteTodoStep(props.todo.id, props.step)}
      >
        <DeleteOutlined />
      </i>
    </li>
  )
}

export default TodoDetailsStepItem
