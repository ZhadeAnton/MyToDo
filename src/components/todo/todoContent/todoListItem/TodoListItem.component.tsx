import React from 'react'
import { StarOutlined, StarFilled, BellOutlined } from '@ant-design/icons';
import moment from 'moment'
import cn from 'classnames'

import styles from './todoListItem.module.scss'
import { ITodo } from '../../../../interfaces';
import { TodoListProps } from '../../../../containers/TodoPageContainer';

interface Props {
  todo: ITodo,
  selectedTodo: TodoListProps['selectedTodo'],
  updateTodo: (todoId: string, data: {}) => void,
  onSelect: (todo: ITodo) => void
}

const TodoListItem: React.FC<Props> = (props) => {
  const timeStamp = props.todo.timestamp.toDate()

  function handleChecked(completed: boolean) {
    props.updateTodo(props.todo.id, {completed})
  }

  function handleImportant(important: boolean) {
    props.updateTodo(props.todo.id, {important: !important})
  }

  return (
    <li
      className={cn(styles.todoListItem,
        props.selectedTodo?.id === props.todo.id ? styles.active : '')}
      onClick={() => props.onSelect(props.todo)}
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
          {
            props.todo.steps?.length
            ?
              <span className={styles.todoSteps}>
                Steps: {props.todo.steps?.length}
              </span>
            :
              null
          }

          {
            props.todo.planned
            ?
              <span className={styles.todoPlanned}>
                Planned <BellOutlined />
              </span>
            :
              null
          }

          <div className={styles.todoTimestamp}>
            <p>
              Created&nbsp;
            </p>
            <time>
              {moment(timeStamp)
                  .format('MMMM Do, h:mm a').toString()}
            </time>
          </div>
        </div>
      </div>
      <span className={styles.iconImportant}
        onClick={() => handleImportant(props.todo.important)}>
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
