import React from 'react'
import { Tooltip } from 'antd'

import styles from './todoDetailsDate.module.scss'
import { ITodo } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import DatePickerForm from '../../../form/datePicker/DatePicker'
import {ReactComponent as RemoveClock}
  from '../../../../assets/todo/icons/remove-clock.svg'

interface Props {
  todo: ITodo,
  onUpdate: TodoListProps['updateTodo']
}

const TodoDetailsDate: React.FC<Props> = (props) => {
  const handleRemoveDate = () => {
    props.onUpdate(props.todo.id, {planned: ''})
  }

  return (
    <div className={styles.detailsDate}>
      <DatePickerForm
        todoId={props.todo.id}
        onUpdate={props.onUpdate}
      />

      <Tooltip placement="topLeft" title="Remove planned date">
        {
          props.todo.planned
          ?
            <RemoveClock
              className={styles.icon}
              onClick={() => handleRemoveDate()}>
              Remove date
            </RemoveClock>
          :
            null
        }
      </Tooltip>
    </div>
  )
}

export default TodoDetailsDate
