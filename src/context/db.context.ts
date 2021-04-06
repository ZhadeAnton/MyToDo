import { createContext } from 'react'

import { getListsTodos, getLists, createTodo } from '../api'
import { ITodoListRecive, ITodoRecive } from '../interfaces'

interface DBContext {
  todos?: ITodoRecive,
  lists: ITodoListRecive,
  getListsTodos: (collection: string) => any,
  getLists: () => any,
  createTodo: (data: {}) => any
}

export default createContext<DBContext>(
    {
      todos: [],
      lists: [],
      getListsTodos,
      getLists,
      createTodo
    }
)
