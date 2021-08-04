/* eslint-disable max-len */
import React from 'react'
import { Divider } from 'antd';

import styles from './todoDrawer.module.scss'
import FilterList from './FilterList/FilterList';
import AddNewList from './AddNewList/AddNewList';
import UserLists from './UserLists/UserLists';
import { ArrayOfTodoLists, IFnCreateList } from '../../../Interfaces/TodoInterfaces';
import { IUser } from '../../../Interfaces/UserInterfaces';
interface Props {
  userId: IUser['id'],
  lists: ArrayOfTodoLists,
  onCreateList: IFnCreateList,
  onDeleteList: (listId: string) => void,
}

const TodoDrawer: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDrawer}>
      <FilterList />

      <Divider />

      <div className={styles.listsBlock}>
        <AddNewList
          userId={props.userId}
          onCreateList={props.onCreateList}
        />

        <UserLists
          lists={props.lists}
          onDeleteList={props.onDeleteList}
        />
      </div>
    </aside>
  )
}

export default TodoDrawer
