import React, { useState } from 'react'
import { Input, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './addNewItem.module.scss'

interface Props {
  children: React.ReactChild,
  className?: string,
  handleSubmit: (title: string) => void
}

const AddNewItem: React.FC<Props> = (props) => {
  const [title, setTitle] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const handleCancelCreating = () => {
    setIsEdit(false)
    setTitle('')
  }

  const handlePressEnter = (title: string) => {
    if (title.trim() !== '') {
      props.handleSubmit(title)
      handleCancelCreating()
    } else {
      message.warning('Value can not be empty!')
    }
  }

  return (
    <div className={styles.newItem}>
      {
        isEdit
        ?
          <div className={styles.addItemInput}>
            <Input
              value={title}
              onBlur={() => handleCancelCreating()}
              onChange={(e) => setTitle(e.target.value)}
              onPressEnter={() => handlePressEnter(title)}
              autoFocus
              maxLength={20}
            />
          </div>
        :
          <div
            className={styles.addItem}
            onClick={() => setIsEdit(true)}
          >
            <PlusOutlined />
            <p>{props.children}</p>
          </div>
      }
    </div>
  )
}

export default AddNewItem
