import { useState, useEffect } from 'react'

import * as api from '../api'
import { ITodo, ITodoList } from '../interfaces'

export default function useApi() {
  const [todos, setTodos] = useState<Array<ITodo>>([])
  const [lists, setLists] = useState<Array<ITodoList>>([])

  useEffect(() => {
    api.fetchLists()
        .then((list: any) => setLists(list))
  }, [])

  function getListTodos(listId: string) {
    return api.fetchListTodos(listId)
        .then((todo: any) => setTodos(todo))
  }

  function getLists() {
    return api.fetchLists()
        .then((list: any) => setLists(list))
  }

  function createTodo(data: {}) {
    return api.fetchCreateTodo(data)
        .then((todo: any) => {
          setTodos([...todos, todo])
        })
  }

  function updateTodo(todoId: string, data: {}) {
    return api.fetchUpdateTodo(todoId, data)
        .then((todo: any) => {
          setTodos([...todos, todo])
        })
  }

  return {
    data: {
      lists,
      todos
    },

    actions: {
      getListTodos,
      getLists,
      createTodo,
      updateTodo
    }
  }
}
