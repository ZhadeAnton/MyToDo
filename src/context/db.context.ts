import { createContext } from 'react'
import { get } from '../api'

import { ITodoListRecive, ITodoRecive } from '../interfaces'

interface DBContext {
  todos?: ITodoRecive,
  lists: ITodoListRecive,
  get: (collection: string) => any
}

export default createContext<DBContext>(
    {todos: [], lists: [], get}
)
