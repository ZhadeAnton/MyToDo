import { useState } from 'react'

interface IFnHandleTodoSubmit {
  (event: React.SyntheticEvent,
  onSubmit: (title: string, listId: string) => void, listId: string): void
}

export default function useTodoForm() {
  const [title, setTitle] = useState('')

  const handleSubmit: IFnHandleTodoSubmit = (event, onSubmit, listId) => {
    event.preventDefault()

    if (title != '') {
      onSubmit(title, listId)
    } else {
      alert('Value must be more 1 symb')
    }

    setTitle('')
  }

  const handleChange = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement
    setTitle(value)
  }

  return {
    title, handleSubmit, handleChange
  }
}
