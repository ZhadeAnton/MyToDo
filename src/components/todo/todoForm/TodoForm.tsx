import React, { useState } from 'react'
import { Input, Button } from 'antd';

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
        placeholder="What do you want to do?"
        value={title}
        onChange={changeHandler}
      />

      <Button onClick={handleSubmit}>Send todo</Button>
    </form>
  )
}

export default TodoForm
