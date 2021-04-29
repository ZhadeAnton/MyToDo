import React, { useState } from 'react'
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './addNewItem.module.scss'

interface Props {
  children: React.ReactChild,
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
    props.handleSubmit(title)
    handleCancelCreating()
  }

  return (
    <>
      {
        isEdit
        ?
        <div className={styles.addItemInput}>
          <Input
            value={title}
            autoFocus
            onBlur={() => handleCancelCreating()}
            onChange={(e) => setTitle(e.target.value)}
            onPressEnter={() => handlePressEnter(title)}
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
    </>
  )
}

export default AddNewItem
