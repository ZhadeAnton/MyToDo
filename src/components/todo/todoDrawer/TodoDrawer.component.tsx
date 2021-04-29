/* eslint-disable max-len */
import React from 'react'
import { Divider} from 'antd';

import styles from './todoDrawer.module.scss'
import { IUser } from '../../../redux/user/userInterfaces';
import UserProfileContainer from '../../../containers/UserProfileContainer.container';
import TodoDrawerList from './todoDrawerList/TodoDrawerList';
import TodoDrawerFilterList from './todoDrawerFilterList/todoDrawerFilterList';
import { TodoListProps } from '../../../containers/TodoPageContainer';
import { ITodoList } from '../../../interfaces';
import AddNewList from '../../form/addNewList/AddNewList';
interface Props {
  user: IUser | undefined,
  lists: Array<ITodoList>,
  createList: TodoListProps['createList'],
  deleteList: TodoListProps['deleteList']
}

const TodoDrawer: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDrawer}>
      <div>
        <UserProfileContainer />
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
