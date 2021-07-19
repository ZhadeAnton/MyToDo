import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

import styles from './closeDetailsButton.module.scss'
import { IFnCloseSelectedTodo } from '../../../../Interfaces/interfaces'

interface Props {
  onCloseSelectedTodo: IFnCloseSelectedTodo
}

const CloseDetailsButton: React.FC<Props> = (props) => {
  return (
    <CloseOutlined
      className={styles.closeDetailsIcon}
      onClick={props.onCloseSelectedTodo}
    />
  )
}

export default CloseDetailsButton
