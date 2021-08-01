import React from 'react'
import { v4 } from 'uuid';

import styles from './bottomLine.module.scss'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon';
import {
  IFnCloseSelectedTodo,
  ITodo } from '../../../../Interfaces/TodoInterfaces';

import ConvertDate from '../../../custom/ConvertDate/ConvertDate';
import { useAppDispatch } from '../../../../Hooks/usePreTypedHooks';
import { addNotification } from '../../../../Redux/General/GeneralActionCreators';

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
      <ConvertDate date={props.selectedTodo.timestamp}/>

      <RemoveIcon
        toolTip='Remove todo'
        placement='topLeft'
        onClick={() => handleDeleteTodo()}
      />
    </div>
  )
}

export default BottomLine
