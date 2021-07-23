import React from 'react'
import { DatePicker, Divider, Tooltip } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import moment from 'moment'
import { v4 } from 'uuid'

import styles from './dataPicker.module.scss'
import * as interfaces from '../../../../Interfaces/TodoInterfaces';
import { IUser } from '../../../../Interfaces/UserInterfaces';
import { useAppDispatch } from '../../../../Hooks/usePreTypedHooks';
import { addNotification } from '../../../../Redux/General/GeneralActionCreators';

interface Props {
  userId: IUser['id'],
  selectedTodo: interfaces.ITodo,
  onSetDateTodo: interfaces.IFnSetDateSelectedTodo,
  onRemoveDateTodo: interfaces.IFnRemoveDateSelectedTodo,
  onUpdate: interfaces.IFnUpdateTodo
}

const DatePickerForm: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()

  function handleUpdateDate(date: any) {
    const newDate = moment(date)
        .format('MMMM Do YYYY, h:mm a')
        .toString()

    props.onUpdate(props.userId, props.selectedTodo!.id, {planned: newDate})
    props.onSetDateTodo(newDate)
    dispatch(addNotification('SUCCESS', `Added new date ${newDate}`, v4()))
  }

  function handleRemoveDate() {
    props.onUpdate(props.userId, props.selectedTodo!.id, {planned: ''})
    props.onRemoveDateTodo()
    dispatch(addNotification('SUCCESS', 'Planned date was removed', v4()))
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

              <Tooltip
                placement="topLeft"
                title="Remove date">
                <StopOutlined style={{zIndex: 100}} onClick={handleRemoveDate}/>
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
