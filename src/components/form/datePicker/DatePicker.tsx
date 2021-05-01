import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment'

import styles from './dataPicker.module.scss'
import { TodoListProps } from '../../../containers/TodoPageContainer';

interface Props {
  todoId: string,
  onUpdate: TodoListProps['updateTodo']
}

const DatePickerForm: React.FC<Props> = (props) => {
  function handleUpdateDate(date: any) {
    props.onUpdate(props.todoId, {planned: moment(date)
        .format('dddd, MMMM Do YYYY, h:mm:ss a')
        .toString()})
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
    </div>
  )
}

export default DatePickerForm
