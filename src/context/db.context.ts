import { createContext } from 'react'

import { ITodoListRecive, ITodoRecive } from '../interfaces'

interface DBContext {
  todos: ITodoRecive,
  lists: ITodoListRecive
}

export default createContext<DBContext>({todos: [], lists: []})
