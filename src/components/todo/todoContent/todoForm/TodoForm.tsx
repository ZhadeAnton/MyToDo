import React, { useState } from 'react'
import { Input } from 'antd';

import styles from './todoForm.module.scss'

interface Props {
  listId: string,
  onSubmit: (title: string, listId: string) => void
}

const TodoForm: React.FC<Props> = ({ onSubmit, listId }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    onSubmit(title, listId)
    setTitle('')
  }

  const changeHandler = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement

    setTitle(value)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <Input
        placeholder="Add a Task"
        onChange={changeHandler}
        onPressEnter={handleSubmit}
        value={title}
        maxLength={40}
      />
    </form>
  )
}

export default TodoForm
