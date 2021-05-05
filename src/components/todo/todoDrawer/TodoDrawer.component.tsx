/* eslint-disable max-len */
import React from 'react'
import { Divider} from 'antd';

import styles from './todoDrawer.module.scss'
import TodoDrawerList from './todoDrawerList/TodoDrawerList';
import TodoDrawerFilterList from './todoDrawerFilterList/todoDrawerFilterList';
import { TodoListProps } from '../../../containers/TodoPageContainer';
import AddNewList from './addNewList/AddNewList';
import UserProfile from '../../custom/userProfile/UserProfile.component';
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
      <div className={styles.userProfileWrapper}>
        <UserProfile
          user={props.user}
          signOutStart={props.signOutStart}
          dropdownPlacement='bottomRight'
        />
      </div>

      <TodoDrawerFilterList />

      <Divider />

      <TodoDrawerList
        lists={props.lists}
        deleteList={props.deleteList}
      />

      <AddNewList
        userId={props.user!.id}
        createList={props.createList}
      />
    </aside>
  )
}

export default TodoDrawer
