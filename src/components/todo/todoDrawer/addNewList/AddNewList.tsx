import React from 'react'
import { IFnCreateList } from '../../../../Interfaces/interfaces';

import AddNewItem from '../../../form/addNewItem/AddNewItem';

interface Props {
  userId: string,
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
