import React from 'react'
import moment from 'moment'

import styles from './bottomLine.module.scss'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon';
import {
  IFnCloseSelectedTodo,
  IFnDeleteTodo,
  ITodo } from '../../../../Interfaces/interfaces';

interface Props {
  selectedTodo: ITodo,
  onDeleteTodo: IFnDeleteTodo,
  onCloseSelectedTodo: IFnCloseSelectedTodo
}

const BottomLine: React.FC<Props> = (props) => {
  const timeStamp = props.selectedTodo!.timestamp.toDate()

  const handleDeleteTodo = () => {
    props.onDeleteTodo(props.selectedTodo!.id)
    props.onCloseSelectedTodo()
  }

  return (
    <div className={styles.bottomLine}>
      <span>
        Created&nbsp;
        {
          moment()
              .from(timeStamp, true)
              .toString()
        }
        &nbsp;ago
      </span>

      <RemoveIcon
        toolTip='Remove todo'
        placement='topLeft'
        onClick={() => handleDeleteTodo()}
      />
    </div>
  )
}

export default BottomLine
