import React from 'react'
import cn from 'classnames'
import { StarOutlined, StarFilled, BellOutlined } from '@ant-design/icons';

import styles from './todoListItem.module.scss'
import * as interfaces from '../../../../Interfaces/TodoInterfaces';
import { IUser } from '../../../../Interfaces/UserInterfaces';

import ConvertDate from '../../../custom/ConvertDate/ConvertDate';

interface Props {
  todo: interfaces.ITodo,
  userId: IUser['id'],
  selectedTodo: interfaces.ITodo,
  onUpdateTodo: interfaces.IFnUpdateTodo,
  onSelectTodo: interfaces.IFnSelectTodo
}

const TodoListItem: React.FC<Props> = (props) => {
  function handleChecked(completed: boolean) {
    props.onUpdateTodo(props.userId, props.todo.id, {completed})
  }

  function handleImportant(important: boolean) {
    props.onUpdateTodo(props.userId, props.todo.id, {important: !important})
  }

  function handleClick(e: any) {
    if (e.target.tagName !== 'INPUT'
      && e.target.tagName !== 'path'
      && e.target.tagName !== 'svg') {
      props.onSelectTodo(props.todo)
    }
  }

  return (
    <li
      className={cn(styles.todoListItem,
        props.selectedTodo?.id === props.todo.id ? styles.active : '')}
      onClick={(e) => handleClick(e)}
    >
      <input
        type='checkbox'
        className={styles.checkbox}
        checked={props.todo.completed}
        onChange={(e) => handleChecked(e.target.checked)}
      />

      <div className={styles.todoContent}>
        <p className={styles.todoTitle}>
          {props.todo.title}
        </p>

        <div className={styles.todoInfo}>
          <div className={styles.todoTimestamp}>
            <p>
              Created&nbsp;
            </p>

            <ConvertDate date={props.todo.timestamp}/>
          </div>

          {
            props.todo.planned &&
              <span className={styles.todoPlanned}>
                Planned <BellOutlined />
              </span>
          }

          {
            props.todo.steps?.length > 0 &&
              <span className={styles.todoSteps}>
                Steps: {props.todo.steps?.length}
              </span>
          }
        </div>
      </div>
      <span
        className={styles.iconImportant}
        onClick={() => handleImportant(props.todo.important)}
      >
        {
          props.todo.important
          ?
            <span className={styles.IconFilled}>
              <StarFilled />
            </span>
          :
            <StarOutlined />
        }
      </span>
    </li>
  )
}

export default TodoListItem
