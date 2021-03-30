import React from 'react';
import {Checkbox} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'

import styles from './todoItem.module.scss'
import {toggleTodo, deleteTodo} from '../../../redux/todo/todoActionCreators'
import {Dispatch} from 'redux';

interface Props {
  toggleTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  completed: boolean,
  title: string,
  id: number
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.todoItem}>
      <span className={styles.checkBox}>
        <Checkbox
          checked={props.completed}
          onChange={() => props.toggleTodo(props.id)}
        />
      </span>
      <span className={styles.description}>
        {props.title}
      </span>
      <span className={styles.removeIcon}>
        <DeleteOutlined
          onClick={() => props.deleteTodo(props.id)}
        />
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem)
