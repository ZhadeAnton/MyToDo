import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

import styles from './closeDetailsButton.module.scss'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  onCloseSelectedTodo: TodoListProps['closeSelectedTodo']
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
