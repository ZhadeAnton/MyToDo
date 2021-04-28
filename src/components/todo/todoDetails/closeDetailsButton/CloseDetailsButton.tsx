import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

import styles from './closeDetailsButton.module.scss'

interface Props {
  onDetailsClose: () => void
}

const CloseDetailsButton: React.FC<Props> = (props) => {
  return (
    <span className={styles.closeBtn}>
      <i onClick={props.onDetailsClose}><CloseOutlined /></i>
    </span>
  )
}

export default CloseDetailsButton
