import React from 'react'

import styles from './todoDetails.module.scss'
import * as interfaces from '../../../Interfaces/interfaces'

import CloseDetailsButton from './closeDetailsButton/CloseDetailsButton'
import StepsForm from './stepsForm/StepsForm';
import DatePickerForm from './datePicker/DatePicker';
import BottomLine from './bottomLine/BottomLine';
import TodoEditForm from './todoForm/TodoForm';
import StepsList from './stepList/StepList';

interface Props {
  selectedTodo: interfaces.ITodo,
  onAddTodoStep: interfaces.IFnAddTodoStep,
  onDeleteTodoStep: interfaces.IFnDeleteTodoStep,
  onDeleteTodo: interfaces.IFnDeleteTodo,
  onUpdate: interfaces.IFnUpdateTodo,
  onSelectTodo: interfaces.IFnSelectTodo,
  onChangeTitleSelectedTodo: interfaces.IFnChangeTitleSelectedTodo,
  onSetDateSelectedTodo: interfaces.IFnSetDateSelectedTodo,
  onRemoveDateSelectedTodo: interfaces.IFnRemoveDateSelectedTodo,
  onCloseSelectedTodo: interfaces.IFnCloseSelectedTodo,
}

const TodoDetails: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDetails}>
      <TodoEditForm
        onUpdate={props.onUpdate}
        selectedTodo={props.selectedTodo}
        changeTitleSelectedTodo={props.onChangeTitleSelectedTodo}

      />

      <StepsForm
        selectedTodo={props.selectedTodo}
        addTodoStep={props.onAddTodoStep}
      />

      <StepsList
        selectedTodo={props.selectedTodo}
        deleteTodoStep={props.onDeleteTodoStep}
      />

      <DatePickerForm
        selectedTodo={props.selectedTodo}
        onUpdate={props.onUpdate}
        onSetDateTodo={props.onSetDateSelectedTodo}
        onRemoveDateTodo={props.onRemoveDateSelectedTodo}
      />

      <BottomLine
        selectedTodo={props.selectedTodo}
        onDeleteTodo={props.onDeleteTodo}
        onCloseSelectedTodo={props.onCloseSelectedTodo}
      />

      <CloseDetailsButton
        onCloseSelectedTodo={props.onCloseSelectedTodo}
      />
    </aside>
  )
}

export default TodoDetails
