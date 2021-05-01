import React from 'react'
import { DeleteOutlined, PushpinOutlined } from '@ant-design/icons'

import { TodoListProps } from '../../../../containers/TodoPageContainer';
import { ITodo, ITodoStep } from '../../../../interfaces';

import styles from './todoDetailsStepItem.module.scss'

interface Props {
  todo: ITodo,
  step: ITodoStep,
  deleteTodoStep: TodoListProps['deleteTodoStep'],
}

const TodoDetailsStepItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.stepListItem}>
      <PushpinOutlined
        className={styles.pinIcon}
      />

      <p>
        {props.step.stepTitle}
      </p>

      <DeleteOutlined
        className={styles.deleteIcon}
        onClick={() => props.deleteTodoStep(props.todo.id, props.step)}
      />
    </li>
  )
}

export default TodoDetailsStepItem
