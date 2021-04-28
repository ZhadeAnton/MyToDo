import React, { useState, useEffect } from 'react'
import { Input } from 'antd'

import styles from './todoDetailsTodoForm.module.scss'
import { ITodo } from '../../../../interfaces'

interface Props {
  todo: ITodo,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetailsTodoForm: React.FC<Props> = (props) => {
  const [todoText, setTodoText] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setTodoText(props.todo.title)
  }, [props.todo])

  const handleChange = (value: string) => {
    setTodoText(value)
  }

  const handleEditTitle = () => {
    setIsEdit(true)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onUpdate(props.todo.id, {title: todoText})
    setIsEdit(false)
  }

  return (
    <form
      className={styles.todoTextForm}
      onClick={handleEditTitle}
    >
      { isEdit ?
        <Input
          value={todoText}
          bordered={false}
          onChange={(e) => handleChange(e.target.value)}
          onPressEnter={(e) => handleSubmit(e)}
          onBlur={() => setIsEdit(false)}
          autoFocus
        />
        : props.todo.title
      }
    </form>
  )
}

export default TodoDetailsTodoForm
