import React from 'react'
import { List } from 'antd';

import styles from './createdLists.module.scss'
import { ArrayOfTodoLists } from '../../../../Interfaces/TodoInterfaces'
import CreatedListsItem from '../createdListsItem/CreatedListsItem'

interface Props {
  lists: ArrayOfTodoLists,
  onDeleteList: (todoId: string) =>void
}

const CreatedLists = (props: Props) => {
  return (
    <List
      className={styles.createdLists}
      dataSource={props.lists}
      pagination={{
        pageSize: 5,
        hideOnSinglePage: true,
        className: 'todoDrawerCreateList-pagination'
      }}
      renderItem={(list) => (
        <CreatedListsItem
          key={list.id}
          list={list}
          onDeleteList={props.onDeleteList}
        />
      )}
    />
  )
}

export default CreatedLists
