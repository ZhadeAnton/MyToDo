import React from 'react'
import { FileSearchOutlined } from '@ant-design/icons'

import styles from './emptyList.module.scss'
import { ITodoList } from '../../../../Interfaces/interfaces'

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
          props.list?.title ? props.list.title : props.path.slice(6)
          }
        </span>
      </h2>

      <p>
        Add a new at the bottom of the page!
      </p>
    </div>
  )
}

export default EmptyList
