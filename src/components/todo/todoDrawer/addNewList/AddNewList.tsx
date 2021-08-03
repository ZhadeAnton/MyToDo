import React from 'react'
import { IFnCreateList } from '../../../../Interfaces/TodoInterfaces';
import { IUser } from '../../../../Interfaces/UserInterfaces';

import AddNewItem from '../../../form/AddNewItem/AddNewItem';

interface Props {
  userId: IUser['id'],
  onCreateList: IFnCreateList,
}

export default function AddNewList(props: Props) {
  const handleSubmit = (listTitle: string) => {
    props.onCreateList(props.userId, listTitle)
  }

  return (
    <AddNewItem handleSubmit={handleSubmit}>
      New list
    </AddNewItem>
  )
}
