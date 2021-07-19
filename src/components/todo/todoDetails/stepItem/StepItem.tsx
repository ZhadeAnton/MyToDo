import React from 'react'

import styles from './stepItem.module.scss'
import { IFnDeleteTodoStep, ITodo, ITodoStep } from '../../../../Interfaces/interfaces';
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon';

interface Props {
  step: ITodoStep,
  selectedTodo: ITodo,
  deleteTodoStep: IFnDeleteTodoStep,
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
