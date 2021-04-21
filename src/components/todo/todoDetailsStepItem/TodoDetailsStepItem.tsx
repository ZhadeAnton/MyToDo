import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'

import styles from './todoDetailsStepItem.module.scss'

interface Props {
  step: string,
  onStepDelete: (step: any) => void
}

const TodoDetailsStepItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.stepItem}>
      <span>
        {props.step}
      </span>

      <i
        onClick={() => props.onStepDelete(props.step)}
      >
        <DeleteOutlined />
      </i>
    </li>
  )
}

export default TodoDetailsStepItem
