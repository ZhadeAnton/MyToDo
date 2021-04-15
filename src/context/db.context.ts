import { createContext } from 'react'

import {
  fetchListTodos,
  fetchLists,
  fetchCreateTodo,
  fetchDeleteTodo
} from '../api'
import { ITodoListRecive, ITodoRecive } from '../interfaces'

interface DBContext {
  todos?: ITodoRecive,
  lists: ITodoListRecive,
  getListsTodos: (collection: string) => any,
  getLists: () => any,
  createTodo: (data: {}) => any,
  fetchDeleteTodo: (todoId: string) => any
}

export default createContext<DBContext>(
    {
      todos: [],
      lists: [],
      getListsTodos: fetchListTodos,
      getLists: fetchLists,
      createTodo: fetchCreateTodo,
      fetchDeleteTodo
    }
)