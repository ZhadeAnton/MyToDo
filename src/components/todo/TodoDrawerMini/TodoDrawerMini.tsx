import React from 'react'
import { PlusOutlined, RightOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Divider } from 'antd'

import styles from './todoDrawerMini.module.scss'
import { ArrayOfTodoLists, IFnCreateList } from '../../../Interfaces/TodoInterfaces'
import { IUser } from '../../../Interfaces/UserInterfaces'
// import AddNewList from '../todoDrawer/addNewList/AddNewList'
// import UserLists from '../todoDrawer/createdLists/CreatedLists'
import FilterListMini from '../FilterListMini/FilterListMini'

interface Props {
  userId: IUser['id'],
  lists: ArrayOfTodoLists,
  onCreateList: IFnCreateList,
  onDeleteList: (listId: string) => void,
}

export default function TodoDrawerMini(props: Props) {
  return (
    <aside className={styles.todoDrawerMini}>
      <RightOutlined style={{padding: 1 + 'rem'}}/>

      <FilterListMini />

      <Divider />

      <PlusOutlined />

      {/* <AddNewList
        userId={props.userId}
        onCreateList={props.onCreateList}
      /> */}

      <div style={{
        marginTop: 1 + 'rem',
        textAlign: 'center'
      }}>
        <UnorderedListOutlined />
      </div>

      {/* <UserLists
        lists={props.lists}
        onDeleteList={props.onDeleteList}
      /> */}
    </aside>
  )
}
