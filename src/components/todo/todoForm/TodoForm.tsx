import React, { useState } from 'react'
import { Input, Button } from 'antd';

import styles from './todoForm.module.scss'

interface Props {
  onSubmit: (title: string) => void
}

const TodoForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    onSubmit(title.trim())
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

      <Button>Send todo</Button>
    </form>
  )
}

export default TodoForm
