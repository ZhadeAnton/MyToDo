import React from 'react'

import styles from './bottomLine.module.scss'
import RemoveIcon from '../../../custom/removeIcon/RemoveIcon';
import {
  IFnCloseSelectedTodo,
  IFnDeleteTodo,
  ITodo } from '../../../../Interfaces/interfaces';
import ConvertDate from '../../../custom/ConvertDate/ConvertDate';

interface Props {
  selectedTodo: ITodo,
  onDeleteTodo: IFnDeleteTodo,
  onCloseSelectedTodo: IFnCloseSelectedTodo
}

const BottomLine: React.FC<Props> = (props) => {
  const handleDeleteTodo = () => {
    props.onDeleteTodo(props.selectedTodo!.id)
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
