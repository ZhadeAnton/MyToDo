import React from 'react'
import { List } from 'antd';

import { ArrayOfTodoLists } from '../../../../Interfaces/TodoInterfaces'
import UserListsItem from '../UserListsItem/UserListsItem'

interface Props {
  lists: ArrayOfTodoLists,
  onDeleteList: (todoId: string) =>void
}

const UserLists = (props: Props) => {
  return (
    <List
      dataSource={props.lists}
      pagination={{
        pageSize: 5,
        hideOnSinglePage: true,
        className: 'todoDrawerCreateList-pagination'
      }}
      renderItem={(list) => (
        <UserListsItem
          key={list.id}
          list={list}
          onDeleteList={props.onDeleteList}
        />
      )}
    />
  )
}

export default UserLists
