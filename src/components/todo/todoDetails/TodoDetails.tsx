import React from 'react'

import styles from './todoDetails.module.scss'
import { ITodo } from '../../../interfaces'

import TodoDetailsStepList from './todoDetailsStepList/TodoDetailsStepList';
import TodoDetailsBottomLine
  from './todoDetailsBottomLine/todoDetailsBottomLine';
import TodoDetailsStepsForm from './todoDetailsStepsForm/TodoDetailsStepsForm';
import TodoDetailsTodoForm from './todoDetailsTodoForm/TodoDetailsTodoForm';
import CloseDetailsButton from './closeDetailsButton/CloseDetailsButton'
import { TodoListProps } from '../../../containers/TodoPageContainer';
import TodoDetailsDate from './todoDetailsDate/TodoDetailsDate';

interface Props {
  todo: ITodo,
  addTodoStep: TodoListProps['addTodoStep'],
  deleteTodoStep: TodoListProps['deleteTodoStep'],
  onClose: () => void,
  onDelete: (todoId: string) => void,
  onUpdate: (todoId: string, data: {}) => void,
  onSelectTodo: (todo: ITodo) => void
}


const TodoDetails: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDetails}>
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

      <TodoDetailsDate
        todo={props.todo}
        onUpdate={props.onUpdate}
      />

      <TodoDetailsBottomLine
        todo={props.todo}
        onDeleteTodo={props.onDelete}
        onClose={props.onClose}
      />

      <CloseDetailsButton
        onDetailsClose={props.onClose}
      />
    </aside>
  )
}

export default TodoDetails
