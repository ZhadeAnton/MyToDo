import React, { useEffect } from 'react'

import styles from './todoDetails.module.scss'
import { ITodo } from '../../../interfaces'

import TodoDetailsStepList from './todoDetailsStepList/TodoDetailsStepList';
import TodoDetailsBottomLine
  from './todoDetailsBottomLine/todoDetailsBottomLine';
import TodoDetailsStepsForm from './todoDetailsStepsForm/TodoDetailsStepsForm';
import TodoDetailsTodoForm from './todoDetailsTodoForm/TodoDetailsTodoForm';
import TodoDetailsTopLine from './todoDetailsTopLine/TodoDetailsTopLine'
import { TodoListProps } from '../../../containers/TodoPageContainer';

interface Props {
  todo: ITodo,
  addTodoStep: TodoListProps['addTodoStep'],
  deleteTodoStep: TodoListProps['deleteTodoStep'],
  onClose: () => void,
  onDelete: (todoId: string) => void,
  onUpdate: (todoId: string, data: {}) => void
}

const TodoDetails: React.FC<Props> = (props) => {
  useEffect(() => {
  }, [props.todo])

  return (
    <aside className={styles.todoDetails}>
      <TodoDetailsTopLine
        todo={props.todo}
        onDetailsClose={props.onClose}
      />

      <TodoDetailsTodoForm
        todo={props.todo}
        onUpdate={props.onUpdate}
      />

      <TodoDetailsStepList
        todo={props.todo}
        deleteTodoStep={props.deleteTodoStep}
      />

      <TodoDetailsStepsForm
        todo={props.todo}
        addTodoStep={props.addTodoStep}
      />

      <TodoDetailsBottomLine
        todo={props.todo}
        onDeleteTodo={props.onDelete}
        onClose={props.onClose}
      />
    </aside>
  )
}

export default TodoDetails
