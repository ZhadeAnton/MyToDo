import { useState, useEffect } from 'react'

import * as api from '../api'
import { ITodo, ITodoList } from '../interfaces'


export default function useApi() {
  const [todos, setTodos] = useState<Array<ITodo>>([])
  const [lists, setLists] = useState<Array<ITodoList>>([])

  useEffect(() => {
    console.log(todos)
    api.getLists()
        .then((list: any) => setLists(list))
  }, [])

  function getListTodos(listId: string) {
    return api.getListsTodos(listId)
        .then((todo: any) => setTodos(todo))
  }

  function getLists() {
    return api.getLists()
        .then((list: any) => setLists(list))
  }

  function createTodo(data: {}) {
    return api.createTodo(data)
        .then((todo: any) => {
          setTodos([...todos, todo])
        })
  }

  function updateTodo(todoId: string, data: {}) {
    return api.updateTodo(todoId, data)
        .then((todo: any) => {
          setTodos([...todos, todo])
        })
  }

  function deleteTodo(todoId: string) {
    return api.deleteTodo(todoId)
        .then((todoId) => {
          setTodos([...todos.filter((todo) => todo.id !== todoId)])
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
      deleteTodo,
      updateTodo
    }
  }
}
