import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

import styles from './todoDetailsTopLine.module.scss'
import { ITodo } from '../../../../interfaces'

interface Props {
  todo: ITodo,
  onDetailsClose: () => void
}

const TodoDetailsTopLine: React.FC<Props> = (props) => {
  return (
    <div className={styles.topLine}>
      <h3>Todo details</h3>
      <span className={styles.closeBtn}>
        <i onClick={props.onDetailsClose}><CloseOutlined /></i>
      </span>
    </div>
  )
}

export default TodoDetailsTopLine
