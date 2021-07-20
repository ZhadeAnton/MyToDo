import React from 'react'
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './addNewItem.module.scss'
import useAddNewItem from '../../../Hooks/useAddNewItem';

interface Props {
  children: React.ReactChild,
  handleSubmit: (title: string) => void
}

const AddNewItem: React.FC<Props> = (props) => {
  const newItemHook = useAddNewItem()

  function handleClickEnter() {
    newItemHook.handlePressEnter(newItemHook.title, props.handleSubmit)
  }

  return (
    <div className={styles.newItem}>
      {
        newItemHook.isEdit
        ?
          <div className={styles.addItemInput}>
            <Input
              value={newItemHook.title}
              onBlur={() => newItemHook.handleCancelCreating()}
              onChange={(e) => newItemHook.setTitle(e.target.value)}
              onPressEnter={handleClickEnter}
              autoFocus
              maxLength={20}
            />
          </div>
        :
          <div
            className={styles.addItem}
            onClick={() => newItemHook.setIsEdit(true)}
          >
            <PlusOutlined />

            <p>
              {props.children}
            </p>
          </div>
      }
    </div>
  )
}

export default AddNewItem
