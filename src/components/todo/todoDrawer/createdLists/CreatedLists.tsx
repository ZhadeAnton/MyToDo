import React from 'react'
import { List } from 'antd';

import styles from './createdLists.module.scss'
import { ITodoList } from '../../../../interfaces'
import { TodoListProps } from '../../../../containers/TodoPageContainer'
import CreatedListsItem from '../createdListsItem/CreatedListsItem'

interface Props {
  lists: Array<ITodoList>,
  deleteList: TodoListProps['deleteList']
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
          deleteList={props.deleteList}
        />
      )}
    />
  )
}

export default CreatedLists
