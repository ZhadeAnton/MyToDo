import React from 'react'
import { IFnCreateList } from '../../../../Interfaces/interfaces';
import { IUser } from '../../../../Redux/User/userInterfaces';

import AddNewItem from '../../../form/addNewItem/AddNewItem';

interface Props {
  userId: IUser['id'],
  onCreateList: IFnCreateList,
}

const AddNewList: React.FC<Props> = (props) => {
  const handleSubmit = (listTitle: string) => {
    props.onCreateList(props.userId, listTitle)
  }

  return (
    <AddNewItem
      handleSubmit={handleSubmit}>
      New list
    </AddNewItem>
  )
}

export default AddNewList
