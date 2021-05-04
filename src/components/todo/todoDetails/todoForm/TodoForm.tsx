import React, { useState } from 'react'
import { Input, Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import styles from './todoForm.module.scss'
import { TodoListProps } from '../../../../containers/TodoPageContainer'

interface Props {
  selectedTodo: TodoListProps['selectedTodo'],
  onUpdate: TodoListProps['updateTodo']
}

const TodoEditForm: React.FC<Props> = (props) => {
  const [todoText, setTodoText] = useState(props.selectedTodo!.title)
  const [isEdit, setIsEdit] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onUpdate(props.selectedTodo!.id, {title: todoText})
    setIsEdit(false)
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

          <p>{props.selectedTodo!.title}</p>
        </div>
      }
    </form>
  )
}

export default TodoEditForm
