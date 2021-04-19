/* eslint-disable max-len */
import React from 'react'
import { Divider} from 'antd';

import styles from './todoDrawer.module.scss'
import { ITodoList } from '../../../interfaces';
import { IUser } from '../../../redux/user/userInterfaces';
import UserProfileContainer from '../../../containers/UserProfileContainer.container';
import TodoDrawerList from '../todoDrawerList/TodoDrawerList';
import TodoDrawerFilterList from '../todoDrawerFilterList/todoDrawerFilterList';
interface Props {
  user: IUser | undefined,
  lists: Array<ITodoList>,
}

const TodoDrawer: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDrawer}>
      <div>
        <UserProfileContainer />
      </div>

      <TodoDrawerFilterList />

      <Divider />

      <TodoDrawerList lists={props.lists} />
    </aside>
  )
}

export default TodoDrawer
