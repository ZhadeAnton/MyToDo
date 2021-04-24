import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { FolderAddOutlined } from '@ant-design/icons';
import { TodoListProps } from '../../../../containers/TodoPageContainer';

interface Props {
  userId: string,
  createList: TodoListProps['createList'],
}

const TodoDrawerCreateList: React.FC<Props> = (props) => {
  const [listTitle, setListTitle] = useState('')
  const [isCreateNewList, setNewList] = useState(false)

  const handleCancelCreating = () => {
    setNewList(false)
    setListTitle('')
  }

  const handleSubmit = () => {
    props.createList(props.userId, listTitle)
    handleCancelCreating()
  }

  return (
    <div>
      {
        isCreateNewList
        ? <Input
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          onBlur={handleCancelCreating}
          onPressEnter={handleSubmit}
        />
        : <div>
          <FolderAddOutlined />
          <Button
            onClick={() => setNewList(true)}
          >Add new list</Button>
        </div>
      }
    </div>
  )
}

export default TodoDrawerCreateList
