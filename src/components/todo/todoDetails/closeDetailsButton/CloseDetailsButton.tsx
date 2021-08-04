import React from 'react'
import { ExportOutlined } from '@ant-design/icons'

import styles from './closeDetailsButton.module.scss'
import { IFnCloseSelectedTodo } from '../../../../Interfaces/TodoInterfaces'

interface Props {
  onCloseSelectedTodo: IFnCloseSelectedTodo
}

const CloseDetailsButton: React.FC<Props> = (props) => {
  return (
    <ExportOutlined
      className={styles.closeDetailsIcon}
      onClick={props.onCloseSelectedTodo}
    />
  )
}

export default CloseDetailsButton
