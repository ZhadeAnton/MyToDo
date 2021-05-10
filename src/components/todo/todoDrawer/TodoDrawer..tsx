/* eslint-disable max-len */
import React from 'react'
import { Divider } from 'antd';

import styles from './todoDrawer.module.scss'
import TodoDrawerFilterList from './filterList/FilterList';
import { TodoListProps } from '../../../containers/TodoPageContainer';
import AddNewList from './addNewList/AddNewList';
import UserProfile from '../../custom/userProfile/UserProfile';
import CreatedLists from './createdLists/CreatedLists';
import HomeLink from '../../custom/homeLink/HomeLink';
interface Props {
  user: TodoListProps['user'],
  lists: TodoListProps['lists'],
  createList: TodoListProps['createList'],
  deleteList: TodoListProps['deleteList'],
  signOutStart: TodoListProps['signOutStart']
}

const TodoDrawer: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDrawer}>
      <div className={styles.backLink}>
        <HomeLink/>
      </div>


      <div className={styles.userProfileWrapper}>
        <UserProfile
          user={props.user}
          signOutStart={props.signOutStart}
          dropdownPlacement='bottomRight'
        />
      </div>

      <Divider />

      <TodoDrawerFilterList />

      <Divider />

      <AddNewList
        userId={props.user!.id}
        createList={props.createList}
      />

      <CreatedLists
        lists={props.lists}
        deleteList={props.deleteList}
      />

      <div className={styles.autor}>
        Created by Zhade Anton 2021 &copy;
      </div>
    </aside>
  )
}

export default TodoDrawer
