import React from 'react'

import styles from './todoDetails.module.scss'
import { TodoListProps } from '../../../containers/TodoPageContainer';
import CloseDetailsButton from './closeDetailsButton/CloseDetailsButton'
import StepsForm from './stepsForm/StepsForm';
import DatePickerForm from '../../form/datePicker/DatePicker';
import BottomLine from './bottomLine/BottomLine';
import TodoEditForm from './todoForm/TodoForm';
import StepsList from './stepList/StepList';

interface Props {
  selectedTodo: TodoListProps['selectedTodo'],
  addTodoStep: TodoListProps['addTodoStep'],
  deleteTodoStep: TodoListProps['deleteTodoStep'],
  onDelete: TodoListProps['deleteTodo'],
  onUpdate: TodoListProps['updateTodo'],
  onSelectTodo: TodoListProps['selectTodo'],
  onCloseSelectedTodo: TodoListProps['closeSelectedTodo'],
}

const TodoDetails: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDetails}>
      <TodoEditForm
        selectedTodo={props.selectedTodo}
        onUpdate={props.onUpdate}
      />

      <StepsForm
        selectedTodo={props.selectedTodo}
        addTodoStep={props.addTodoStep}
      />

      <StepsList
        selectedTodo={props.selectedTodo}
        deleteTodoStep={props.deleteTodoStep}
      />

      <DatePickerForm
        selectedTodo={props.selectedTodo}
        onUpdate={props.onUpdate}
      />

      <BottomLine
        selectedTodo={props.selectedTodo}
        onDeleteTodo={props.onDelete}
        onCloseSelectedTodo={props.onCloseSelectedTodo}
      />

      <CloseDetailsButton
        onCloseSelectedTodo={props.onCloseSelectedTodo}
      />
    </aside>
  )
}

export default TodoDetails
