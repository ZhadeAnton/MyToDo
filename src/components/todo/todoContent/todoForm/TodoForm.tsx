import React from 'react'
import { Input } from 'antd';

import styles from './todoForm.module.scss'
import useTodoForm from '../../../../Hooks/useTodoForm';

interface Props {
  listId: string,
  onSubmit: (title: string, listId: string) => void
}

const TodoForm = (props: Props) => {
  const todoForm = useTodoForm()

  return (
    <form
      onSubmit={(e) => todoForm.handleSubmit(e, props.onSubmit, props.listId)}
      className={styles.todoForm}
    >
      <Input
        placeholder="New todo"
        onChange={(e) => todoForm.handleChange(e)}
        onSubmit={(e) => todoForm.handleSubmit(e, props.onSubmit, props.listId)}
        value={todoForm.title}
        maxLength={32}
      />
    </form>
  )
}

export default TodoForm
