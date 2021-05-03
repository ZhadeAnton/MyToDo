import React from 'react'
import { DatePicker, Tooltip } from 'antd';
import moment from 'moment'

import styles from './dataPicker.module.scss'
import { TodoListProps } from '../../../containers/TodoPageContainer';
import { ITodo } from '../../../interfaces';
import {ReactComponent as RemoveClock}
  from '../../../assets/todo/icons/remove-clock.svg'

interface Props {
  todo: ITodo,
  onUpdate: TodoListProps['updateTodo']
}

const DatePickerForm: React.FC<Props> = (props) => {
  function handleUpdateDate(date: any) {
    props.onUpdate(props.todo.id, {planned: moment(date)
        .format('dddd, MMMM Do YYYY, h:mm:ss a')
        .toString()})
  }

  function handleRemoveDate() {
    props.onUpdate(props.todo.id, {planned: ''})
  }

  function disabledDate(current: any) {
    return current && current < moment().endOf('day');
  }

  return (
    <div className={styles.dataPicker}>
      <DatePicker
        showTime
        size='large'
        onOk={handleUpdateDate}
        disabledDate={disabledDate}
      />

      <Tooltip
        placement="topLeft"
        title="Remove planned date"
      >
        {
          props.todo.planned
          ?
            <RemoveClock
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

export default DatePickerForm
