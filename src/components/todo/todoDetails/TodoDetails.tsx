import React from 'react'

import styles from './todoDetails.module.scss'
import * as interfaces from '../../../Interfaces/TodoInterfaces'

import AddNewStep from './stepsForm/StepsForm';
import DatePickerForm from './datePicker/DatePicker';
import BottomLine from './bottomLine/BottomLine';
import TodoEditForm from './todoEditForm/TodoEditForm';
import StepsList from './stepList/StepList';
import { IUser } from '../../../Interfaces/UserInterfaces';

interface Props {
  userId: IUser['id'],
  selectedTodo: interfaces.ITodo,
  onUpdate: interfaces.IFnUpdateTodo,
  onSelectTodo: interfaces.IFnSelectTodo,
  onChangeTitleSelectedTodo: interfaces.IFnChangeTitleSelectedTodo,
  onSetDateSelectedTodo: interfaces.IFnSetDateSelectedTodo,
  onRemoveDateSelectedTodo: interfaces.IFnRemoveDateSelectedTodo,
  onCloseSelectedTodo: interfaces.IFnCloseSelectedTodo,
  onAddTodoStep: (todoId: interfaces.ITodo['id'], step: interfaces.ITodoStep) => void,
  onDeleteTodoStep: (todoId: interfaces.ITodo['id'], step: interfaces.ITodoStep) => void,
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

      <div className={styles.stepsBlock}>
        <AddNewStep
          selectedTodo={props.selectedTodo}
          onAddTodoStep={props.onAddTodoStep}
        />

        <StepsList
          selectedTodo={props.selectedTodo}
          deleteTodoStep={props.onDeleteTodoStep}
        />
      </div>

      <div className={styles.bottomInfo}>
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
      </div>
    </aside>
  )
}

export default TodoDetails
