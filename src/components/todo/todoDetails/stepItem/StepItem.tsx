import React from 'react'

import styles from './stepItem.module.scss'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon';
import { ITodo, ITodoStep } from '../../../../Interfaces/TodoInterfaces';

interface Props {
  step: ITodoStep,
  selectedTodo: ITodo,
  deleteTodoStep: (todoId: ITodo['id'], step: ITodoStep) => void
}

const StepItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.stepItem}>
      <p>
        {props.step.stepTitle}
      </p>

      <RemoveIcon
        onClick={() => props.deleteTodoStep(props.selectedTodo!.id, props.step)}
      />
    </li>
  )
}

export default StepItem
