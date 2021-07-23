import { useState } from 'react'
import { IAddTodoStep, ITodo } from '../Interfaces/TodoInterfaces'

export default function useAddNewItem(todoId: ITodo['id']) {
  const [title, setTitle] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const handleCancelCreating = () => {
    setIsEdit(false)
    setTitle('')
  }

  const handlePressEnter = (
      title: string, handleSubmit: (step: IAddTodoStep) => void) => {
    if (title.trim() !== '') {
      const step = {stepTitle: title, todoId}
      handleSubmit(step)
      handleCancelCreating()
    } else {
      console.log('Value can not be empty!')
    }
  }

  return {
    title, setTitle, setIsEdit, isEdit, handleCancelCreating, handlePressEnter
  }
}
