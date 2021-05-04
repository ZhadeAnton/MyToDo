import React from 'react'

import styles from './stepItem.module.scss'
import { ITodoStep } from '../../../../interfaces';
import { TodoListProps } from '../../../../containers/TodoPageContainer';
import RemoveIcon from '../../../custom/customRemoveIcon/CustomRemoveIcon';

interface Props {
  step: ITodoStep,
  selectedTodo: TodoListProps['selectedTodo'],
  deleteTodoStep: TodoListProps['deleteTodoStep'],
}

const StepItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.stepItem}>
      <p>{props.step.stepTitle}</p>

      <RemoveIcon
        onClick={() => props.deleteTodoStep(props.selectedTodo!.id, props.step)}
      />
    </li>
  )
}

export default StepItem
