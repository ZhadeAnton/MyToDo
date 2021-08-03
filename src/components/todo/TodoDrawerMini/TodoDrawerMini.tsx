import React, { useState } from 'react'
import { Divider, Drawer } from 'antd'
import { PlusOutlined, RightOutlined, UnorderedListOutlined } from '@ant-design/icons'

import styles from './todoDrawerMini.module.scss'
import { ArrayOfTodoLists, IFnCreateList } from '../../../Interfaces/TodoInterfaces'
import { IUser } from '../../../Interfaces/UserInterfaces'
import AddNewList from '../todoDrawer/addNewList/AddNewList'
import UserLists from '../todoDrawer/createdLists/CreatedLists'
import FilterListMini from '../FilterListMini/FilterListMini'

interface Props {
  userId: IUser['id'],
  lists: ArrayOfTodoLists,
  onCreateList: IFnCreateList,
  onDeleteList: (listId: string) => void,
}

export default function TodoDrawerMini(props: Props) {
  const [visible, setVisible] = useState(false)

  const onClose = () => {
    setVisible(!visible)
  }

  const onOpen = () => {
    setVisible(true)
  }

  return (
    <aside className={styles.todoDrawerMini}>
      <RightOutlined
        style={{padding: 1 + 'rem'}}
        onClick={onOpen}
      />

      <FilterListMini />
      <Divider />

      <div className={styles.listIconsWrapper}>
        <PlusOutlined onClick={onOpen}/>

        <UnorderedListOutlined onClick={onOpen}/>
      </div>

      <Drawer
        title="Basic Drawer"
        placement='left'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <AddNewList
          userId={props.userId}
          onCreateList={props.onCreateList}
        />

        <Divider />

        <UserLists
          lists={props.lists}
          onDeleteList={props.onDeleteList}
        />

        <Divider />
      </Drawer>
    </aside>
  )
}
