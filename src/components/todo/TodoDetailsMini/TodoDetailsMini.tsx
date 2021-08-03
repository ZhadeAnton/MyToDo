import React, { useState } from 'react'
import { Drawer } from 'antd'

import styles from './todoDetailsMini.module.scss'
import { IUser } from '../../../Interfaces/UserInterfaces'
import useWindowDimensions from '../../../Hooks/useWindowDimensions'
import * as interfaces from '../../../Interfaces/TodoInterfaces'
import TodoEditForm from '../todoDetails/todoForm/TodoForm'
import AddNewStep from '../todoDetails/stepsForm/StepsForm'
import StepsList from '../todoDetails/stepList/StepList'
import DatePickerForm from '../todoDetails/datePicker/DatePicker'
import BottomLine from '../todoDetails/bottomLine/BottomLine'
import CloseDetailsButton from '../todoDetails/closeDetailsButton/CloseDetailsButton'

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

export default function TodoDetailsMini(props: Props) {
  const windowDimentions = useWindowDimensions()
  // Adaptive for drawer
  const width = windowDimentions.width > 576 ? 350 : 290

  const [visible, setVisible] = useState(!!props.selectedTodo)

  const onClose = () => {
    setVisible(!visible)
    props.onCloseSelectedTodo()
  }

  return (
    <aside className={styles.todoDetailsMini}>
        props.selectedTodo &&
      <Drawer
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        width={width}
      >
        <TodoEditForm
          userId={props.userId}
          onUpdate={props.onUpdate}
          selectedTodo={props.selectedTodo}
          changeTitleSelectedTodo={props.onChangeTitleSelectedTodo}

        />

        <AddNewStep
          selectedTodo={props.selectedTodo}
          onAddTodoStep={props.onAddTodoStep}
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
      </Drawer>
    </aside>
  )
}
