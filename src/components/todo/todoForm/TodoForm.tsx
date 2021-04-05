import React, { useState } from 'react'
import { Input } from 'antd';

import styles from './todoForm.module.scss'

interface Props {
  onSubmit: (title: string) => void
}

const TodoForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    onSubmit(title)
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
    </form>
  )
}

export default TodoForm
