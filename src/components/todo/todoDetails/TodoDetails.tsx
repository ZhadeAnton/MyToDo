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
    <aside className={styles.todoDetails}>
      <div className={styles.topBanner}>
        <p className={styles.bannerTitle}>{todo.title}</p>
      </div>

      <span className={styles.closeBtn}>
        <i onClick={onClose}><CloseOutlined /></i>
      </span>
    </aside>
  )
}

export default TodoDetails
