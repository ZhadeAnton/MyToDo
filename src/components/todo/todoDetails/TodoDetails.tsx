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
import DatePickerForm from '../../form/datePicker/DatePicker';

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
  const todoId = props.todo.id

  return (
    <aside className={styles.todoDetails}>
      <CloseDetailsButton
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

      <DatePickerForm
        todoId={todoId}
        onUpdate={props.onUpdate}
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
