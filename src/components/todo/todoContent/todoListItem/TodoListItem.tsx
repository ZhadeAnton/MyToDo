import React from 'react'
import { StarOutlined, StarFilled, BellOutlined } from '@ant-design/icons';
import moment from 'moment'
import cn from 'classnames'

import styles from './todoListItem.module.scss'
import { ITodo } from '../../../../interfaces';
import { TodoListProps } from '../../../../containers/TodoPageContainer';

interface Props {
  todo: ITodo,
  updateTodo: TodoListProps['updateTodo'],
  selectedTodo: TodoListProps['selectedTodo'],
  onSelectTodo: TodoListProps['selectTodo']
}

const TodoListItem: React.FC<Props> = (props) => {
  const timeStamp = props.todo.timestamp.toDate()

  function handleChecked(completed: boolean) {
    props.updateTodo(props.todo.id, {completed})
  }

  function handleImportant(important: boolean) {
    props.updateTodo(props.todo.id, {important: !important})
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
