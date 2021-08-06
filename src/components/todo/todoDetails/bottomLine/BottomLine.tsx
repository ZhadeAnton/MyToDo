import React from 'react'
import { v4 } from 'uuid';
import { Popconfirm } from 'antd';

import styles from './bottomLine.module.scss'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon';
import {
  IFnCloseSelectedTodo,
  ITodo } from '../../../../Interfaces/TodoInterfaces';

import ConvertDate from '../../../custom/ConvertDate/ConvertDate';
import { useAppDispatch } from '../../../../Hooks/usePreTypedHooks';
import { addNotification } from '../../../../Redux/General/GeneralActionCreators';
import CloseDetailsButton from '../closeDetailsButton/CloseDetailsButton';

interface Props {
  selectedTodo: ITodo,
  onDeleteTodo: (todoId: string) => void,
  onCloseSelectedTodo: IFnCloseSelectedTodo
}

const BottomLine: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()

  const handleDeleteTodo = () => {
    props.onDeleteTodo(props.selectedTodo!.id)
    dispatch(addNotification('SUCCESS', 'Todo was deleted', v4()))
    props.onCloseSelectedTodo()
  }

  return (
    <div className={styles.bottomLine}>
      <CloseDetailsButton
        onCloseSelectedTodo={props.onCloseSelectedTodo}
      />

      <ConvertDate date={props.selectedTodo.timestamp}/>

      <Popconfirm
        placement="topLeft"
        title='Are you sure to delete this task?'
        onConfirm={handleDeleteTodo}
        okText="Yes"
        cancelText="No"
      >
        <RemoveIcon
          placement='topLeft'
        />
      </Popconfirm>
    </div>
  )
}

export default BottomLine
