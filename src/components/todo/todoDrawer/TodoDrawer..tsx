/* eslint-disable max-len */
import React from 'react'
import { Divider } from 'antd';

import styles from './todoDrawer.module.scss'
import TodoDrawerFilterList from './filterList/FilterList';
import AddNewList from './addNewList/AddNewList';
import UserProfile from '../../custom/userProfile/UserProfile';
import CreatedLists from './createdLists/CreatedLists';
import { IUser } from '../../../Redux/User/userInterfaces';
import { ArrayOfTodoLists, IFnCreateList, IFnDeleteList } from '../../../Interfaces/interfaces';
interface Props {
  user: IUser | undefined,
  lists: ArrayOfTodoLists,
  onCreateList: IFnCreateList,
  onDeleteList: IFnDeleteList,
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

      <TodoDrawerFilterList />

      <Divider />

      <AddNewList
        userId={props.user!.id}
        onCreateList={props.onCreateList}
      />

      <CreatedLists
        lists={props.lists}
        onDeleteList={props.onDeleteList}
      />

      <div className={styles.autor}>
        Created by Zhade Anton 2021 &copy;
      </div>
    </aside>
  )
}

export default TodoDrawer
