import { useState } from 'react'
import { ITodo } from '../Interfaces/TodoInterfaces'

export default function useAddNewItem(todoId: ITodo['id']) {
  const [title, setTitle] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const handleCancelCreating = () => {
    setIsEdit(false)
    setTitle('')
  }

  const handlePressEnter = (title: string, handleSubmit: any) => {
    if (title.trim() !== '') {
      if (todoId) {
        const step = {stepTitle: title, todoId}
        handleSubmit(step)
      }

      handleSubmit(title)
      handleCancelCreating()
    } else {
      alert('Value can not be empty!')
    }
  }

  return {
    title, setTitle, setIsEdit, isEdit, handleCancelCreating, handlePressEnter
  }
}
