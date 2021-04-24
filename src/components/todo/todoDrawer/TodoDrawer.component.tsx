/* eslint-disable max-len */
import React from 'react'
import { Divider} from 'antd';

import styles from './todoDrawer.module.scss'
import { ITodoList } from '../../../interfaces';
import { IUser } from '../../../redux/user/userInterfaces';
import UserProfileContainer from '../../../containers/UserProfileContainer.container';
import TodoDrawerList from './todoDrawerList/TodoDrawerList';
import TodoDrawerFilterList from './todoDrawerFilterList/todoDrawerFilterList';
import TodoDrawerCreateList from './todoDrawerCreateList/TodoDrawerCreateList';
import { TodoListProps } from '../../../containers/TodoPageContainer';
interface Props {
  user: IUser | undefined,
  lists: Array<ITodoList>,
  createList: TodoListProps['createList']
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

      <TodoDrawerCreateList
        userId={props.user!.uid}
        createList={props.createList}
      />
    </aside>
  )
}

export default TodoDrawer
