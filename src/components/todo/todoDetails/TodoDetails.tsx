import React from 'react'

import styles from './todoDetails.module.scss'
import * as interfaces from '../../../Interfaces/TodoInterfaces'

import CloseDetailsButton from './closeDetailsButton/CloseDetailsButton'
import StepsForm from './stepsForm/StepsForm';
import DatePickerForm from './datePicker/DatePicker';
import BottomLine from './bottomLine/BottomLine';
import TodoEditForm from './todoForm/TodoForm';
import StepsList from './stepList/StepList';
import { IUser } from '../../../Interfaces/UserInterfaces';

interface Props {
  userId: IUser['id'],
  selectedTodo: interfaces.ITodo,
  onAddTodoStep: interfaces.IFnAddTodoStep,
  onDeleteTodoStep: interfaces.IFnDeleteTodoStep,
  onUpdate: interfaces.IFnUpdateTodo,
  onSelectTodo: interfaces.IFnSelectTodo,
  onChangeTitleSelectedTodo: interfaces.IFnChangeTitleSelectedTodo,
  onSetDateSelectedTodo: interfaces.IFnSetDateSelectedTodo,
  onRemoveDateSelectedTodo: interfaces.IFnRemoveDateSelectedTodo,
  onCloseSelectedTodo: interfaces.IFnCloseSelectedTodo,
  onDeleteTodo: (todoId: string) => void,
}

const TodoDetails: React.FC<Props> = (props) => {
  return (
    <aside className={styles.todoDetails}>
      <TodoEditForm
        userId={props.userId}
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
        userId={props.userId}
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
