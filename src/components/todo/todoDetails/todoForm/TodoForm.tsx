import React, { useState, useEffect } from 'react'
import { Input, Tooltip, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import styles from './todoForm.module.scss'
import {
  IFnChangeTitleSelectedTodo,
  IFnUpdateTodo,
  ITodo } from '../../../../Interfaces/TodoInterfaces'
import { IUser } from '../../../../Interfaces/UserInterfaces'

interface Props {
  userId: IUser['id'],
  selectedTodo: ITodo,
  changeTitleSelectedTodo: IFnChangeTitleSelectedTodo,
  onUpdate: IFnUpdateTodo
}

const TodoEditForm: React.FC<Props> = (props) => {
  const [todoText, setTodoText] = useState<string>('')
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setTodoText(props.selectedTodo.title)
  }, [props.selectedTodo])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (todoText.trim() !== '') {
      props.onUpdate(props.userId, props.selectedTodo!.id, {title: todoText})
      props.changeTitleSelectedTodo(todoText)
      setIsEdit(false)
    } else {
      message.warning('Todo text can not be empty!')
      setTodoText(props.selectedTodo.title)
      setIsEdit(false)
    }
  }

  return (
    <form
      className={styles.todoTextForm}
      onClick={() => setIsEdit(true)}>

      { isEdit
      ?
        <Input
          value={todoText}
          bordered={false}
          onChange={(e) => setTodoText(e.target.value)}
          onPressEnter={(e) => handleSubmit(e)}
          onBlur={() => setIsEdit(false)}
          maxLength={25}
          autoFocus
        />
      :
        <div className={styles.todoTitle}>
          <Tooltip title="Edit Todo text">
            <EditOutlined
              className={styles.toolTipIcon}
            />
          </Tooltip>

          <p>{todoText}</p>
        </div>
      }
    </form>
  )
}

export default TodoEditForm
