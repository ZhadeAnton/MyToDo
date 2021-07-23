/* eslint-disable max-len */
import React from 'react'
import { Divider } from 'antd';

import styles from './todoDrawer.module.scss'
import FilterList from './filterList/FilterList';
import AddNewList from './addNewList/AddNewList';
import UserProfile from '../../custom/userProfile/UserProfile';
import UserLists from './createdLists/CreatedLists';
import { ArrayOfTodoLists, IFnCreateList } from '../../../Interfaces/TodoInterfaces';
import { IUser } from '../../../Interfaces/UserInterfaces';
interface Props {
  user: IUser | null,
  userId: IUser['id'],
  lists: ArrayOfTodoLists,
  onCreateList: IFnCreateList,
  onDeleteList: (listId: string) => void,
  onSignOut: () => void
}

const TodoDrawer: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDrawer}>
      <div className={styles.userProfileWrapper}>
        <UserProfile
          user={props.user}
          signOutStart={props.onSignOut}
          dropdownPlacement='bottomRight'
        />
      </div>

      <Divider />

      <FilterList />

      <Divider />

      <AddNewList
        userId={props.userId}
        onCreateList={props.onCreateList}
      />

      <UserLists
        lists={props.lists}
        onDeleteList={props.onDeleteList}
      />
    </aside>
  )
}

export default TodoDrawer
