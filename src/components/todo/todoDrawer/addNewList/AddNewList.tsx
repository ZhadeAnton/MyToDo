import React from 'react'

import { TodoListProps } from '../../../../containers/TodoPageContainer';
import AddNewItem from '../../../form/addNewItem/AddNewItem';

interface Props {
  userId: string,
  createList: TodoListProps['createList'],
}

const AddNewList: React.FC<Props> = (props) => {
  const handleSubmit = (listTitle: string) => {
    props.createList(props.userId, listTitle)
  }

  return (
    <AddNewItem
      handleSubmit={handleSubmit}>
      New list
    </AddNewItem>
  )
}

export default AddNewList
