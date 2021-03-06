import React from 'react'
import { FileSearchOutlined } from '@ant-design/icons'

import styles from './emptyList.module.scss'
import { ITodoList } from '../../../../Interfaces/TodoInterfaces'

interface Props {
  list: ITodoList | undefined,
  path: string
}

const EmptyList: React.FC<Props> = (props) => {
  return (
    <div className={styles.emptyList}>
      <FileSearchOutlined />

      <h2>There is no todos for&nbsp;
        <span>
          {
            props.list?.title
            ? props.list.title
            : props.path === '/'
            ? 'Todos'
            : props.path.slice(1)
          }
        </span>
      </h2>

      <p>
        Add a new todo at the bottom of the page!
      </p>
    </div>
  )
}

export default EmptyList
