import React from 'react'
import { DatePicker, Divider, Tooltip, message } from 'antd';
import moment from 'moment'

import styles from './dataPicker.module.scss'
import { TodoListProps } from '../../../containers/TodoPageContainer';
import {ReactComponent as RemoveDate}
  from '../../../assets/todo/icons/remove-date.svg'

interface Props {
  selectedTodo: TodoListProps['selectedTodo'],
  onUpdate: TodoListProps['updateTodo']
}

const DatePickerForm: React.FC<Props> = (props) => {
  function handleUpdateDate(date: any) {
    const newDate = moment(date)
        .format('MMMM Do YYYY, h:mm a')
        .toString()

    props.onUpdate(props.selectedTodo!.id, {planned: newDate})
    message.success(`Added new date ${newDate}`)
  }

  function handleRemoveDate() {
    props.onUpdate(props.selectedTodo!.id, {planned: ''})
    message.warning('Planned date was removed')
  }

  function disabledDate(current: any) {
    return current && current < moment().endOf('day');
  }

  return (
    <div className={styles.dataPicker}>
      {
        props.selectedTodo!.planned
        ?
          <>
            <Divider
              orientation="left">
              <h3>Planned on</h3>
            </Divider>

            <div className={styles.planned}>
              <time>
                {
                  props.selectedTodo!.planned
                }
              </time>
              <Tooltip placement="topLeft" title="Remove date">
                <RemoveDate onClick={() => handleRemoveDate()} />
              </Tooltip>
            </div>
          </>
        :
          <>
            <Divider
              orientation="left"
              className={styles.title}>
              <h3>Add due date</h3>
            </Divider>

            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm"
              size='large'
              onOk={handleUpdateDate}
              disabledDate={disabledDate}
            />
          </>
      }
    </div>
  )
}

export default DatePickerForm
