import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

import styles from './todoDetails.module.scss'
import { ITodo } from '../../../interfaces'

interface Props {
  todo: ITodo,
  onClose: () => void
}

const TodoDetails = ({ todo, onClose }: Props) => {
  return (
    <div className={styles.todoDetails}>
      <p>{todo.title}</p>
      <i onClick={onClose}><CloseOutlined /></i>
    </div>
  )
}

export default TodoDetails
