import { createContext } from 'react'

import { getListsTodos, getLists } from '../api'
import { ITodoListRecive, ITodoRecive } from '../interfaces'

interface DBContext {
  todos?: ITodoRecive,
  lists: ITodoListRecive,
  getListsTodos: (collection: string) => any,
  getLists: () => any,
}

export default createContext<DBContext>(
    {
      todos: [],
      lists: [],
      getListsTodos,
      getLists
    }
)
