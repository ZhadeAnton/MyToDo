import React, { useState } from 'react'
import { Drawer } from 'antd'

import styles from './todoDetailsMini.module.scss'
import { IUser } from '../../../Interfaces/UserInterfaces'
import useWindowDimensions from '../../../Hooks/useWindowDimensions'
import * as interfaces from '../../../Interfaces/TodoInterfaces'
import TodoEditForm from '../todoDetails/todoEditForm/TodoEditForm'
import AddNewStep from '../todoDetails/stepsForm/StepsForm'
import StepsList from '../todoDetails/stepList/StepList'
import DatePickerForm from '../todoDetails/datePicker/DatePicker'
import BottomLine from '../todoDetails/bottomLine/BottomLine'

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
  const width = windowDimentions.width > 576 ? 320 : 290

  const [visible, setVisible] = useState(!!props.selectedTodo)

  const onClose = () => {
    setVisible(!visible)
    props.onCloseSelectedTodo()
  }

  return (
    <>
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
        <aside className={styles.todoDetailsMini}>
          <AddNewStep
            selectedTodo={props.selectedTodo}
            onAddTodoStep={props.onAddTodoStep}
          />

          <StepsList
            selectedTodo={props.selectedTodo}
            deleteTodoStep={props.onDeleteTodoStep}
          />

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
      </Drawer>
    </>
  )
}
