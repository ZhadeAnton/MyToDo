import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd';
import firebase from 'firebase';

import styles from './todoDetailsStepItem.module.scss'
import { TodoListProps } from '../../../../containers/TodoPageContainer';
import { ITodo, ITodoStep } from '../../../../interfaces';

interface Props {
  todo: ITodo,
  step: ITodoStep,
  onUpdate: TodoListProps['updateTodo']
}

const TodoDetailsStepItem: React.FC<Props> = (props) => {
  const handleStepRemove = (step: any) => {
    props.onUpdate(props.todo.id,
        {steps: firebase.firestore.FieldValue.arrayRemove(step)})
  }

  return (
    <li className={styles.stepItem}>
      <Checkbox
        checked={props.step.completed}
      />
      <span>
        {props.step.text}
      </span>

      <i
        onClick={() => handleStepRemove(props.step)}
      >
        <DeleteOutlined />
      </i>
    </li>
  )
}

export default TodoDetailsStepItem
