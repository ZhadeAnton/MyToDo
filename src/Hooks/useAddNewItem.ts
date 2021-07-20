import { useState } from 'react'

export default function useAddNewItem() {
  const [title, setTitle] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const handleCancelCreating = () => {
    setIsEdit(false)
    setTitle('')
  }

  const handlePressEnter = (title: string, handleSubmit: (title: string) => void) => {
    if (title.trim() !== '') {
      handleSubmit(title)
      handleCancelCreating()
    } else {
      console.log('Value can not be empty!')
    }
  }

  return {
    title, setTitle, setIsEdit, isEdit, handleCancelCreating, handlePressEnter
  }
}
