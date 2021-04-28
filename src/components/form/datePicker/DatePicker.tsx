import React, { useState } from 'react'
import { DatePicker, Space, Button } from 'antd';
import moment from 'moment'

import styles from './dataPicker.module.scss'
import { TodoListProps } from '../../../containers/TodoPageContainer';

interface Props {
  todoId: string,
  onUpdate: TodoListProps['updateTodo']
}

const DatePickerForm: React.FC<Props> = (props) => {
  const [date, setDate] = useState('')

  function handleChange(value: any) {
    setDate(value)
  }

  function handleUpdate() {
    props.onUpdate(props.todoId, {planned: moment(date)
        .format('dddd, MMMM Do YYYY, h:mm:ss a')
        .toString()})
  }

  function handleRemoveDate() {
    props.onUpdate(props.todoId, {planned: ''})
  }

  function disabledDate(current: any) {
    return current && current < moment().endOf('day');
  }

  return (
    <div className={styles.dataPicker}>
      <Space direction="vertical" size={12}>
        <DatePicker
          showTime
          onOk={handleChange}
          disabledDate={disabledDate}
        />
      </Space>

      <Button
        onClick={handleUpdate}
      >Set date
      </Button>

      <Button
        onClick={handleRemoveDate}
      >Clean date
      </Button>
    </div>
  )
}

export default DatePickerForm
