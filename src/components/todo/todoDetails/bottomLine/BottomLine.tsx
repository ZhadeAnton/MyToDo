import React from 'react'
import moment from 'moment'

import styles from './bottomLine.module.scss'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import RemoveIcon from '../../../custom/customRemoveIcon/CustomRemoveIcon';

interface Props {
  selectedTodo: TodoListProps['selectedTodo'],
  onDeleteTodo: TodoListProps['deleteTodo'],
  onCloseSelectedTodo: TodoListProps['closeSelectedTodo']
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
