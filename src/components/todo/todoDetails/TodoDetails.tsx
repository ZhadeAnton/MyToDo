import React from 'react'

import styles from './todoDetails.module.scss'
import { ITodo } from '../../../interfaces'
import { TodoListProps } from '../../../containers/TodoPageContainer';
import TodoForm from './todoForm/TodoForm';
import StepList from './stepList/StepList';
import StepsForm from './stepsForm/StepsForm';
import DatePickerForm from '../../form/datePicker/DatePicker';
import BottomLine from './bottomLine/BottomLine';
import CloseDetailsButton from './closeDetailsButton/CloseDetailsButton'

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
      <TodoForm
        todo={props.todo}
        onUpdate={props.onUpdate}
      />

      <StepList
        todo={props.todo}
        deleteTodoStep={props.deleteTodoStep}
      />

      <StepsForm
        todo={props.todo}
        addTodoStep={props.addTodoStep}
      />

      <DatePickerForm
        todo={props.todo}
        onUpdate={props.onUpdate}
      />

      <BottomLine
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
