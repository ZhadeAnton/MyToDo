import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'

import styles from './todoDetailsTodoForm.module.scss'
import { ITodo } from '../../../../interfaces'

interface Props {
  todo: ITodo,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetailsTodoForm: React.FC<Props> = (props) => {
  const [todoText, setTodoText] = useState('')

  useEffect(() => {
    setTodoText(props.todo.title)
  }, [props.todo])

  const handleChange = (value: string) => {
    setTodoText(value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onUpdate(props.todo.id, {title: todoText})
    setTodoText('')
  }

  return (
    <form className={styles.todoTextForm}>
      <Input
        value={todoText}
        onChange={(e) => handleChange(e.target.value)}
        onPressEnter={(e) => handleSubmit(e)}
        autoFocus
        allowClear
      />

      <Button onClick={(e) => handleSubmit(e)}>Confirm</Button>
    </form>
  )
}

export default TodoDetailsTodoForm
