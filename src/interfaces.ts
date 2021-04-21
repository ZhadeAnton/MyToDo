export interface ITodo {
  title: string,
  listId: string,
  userId: string,
  id: string,
  completed: boolean,
  important: boolean
  timestamp: any,
  steps: [] | undefined
}

export type ITodoRecive = ITodo[]

export interface ITodoList {
  title: string,
  id: string
}

export type ITodoListRecive = ITodoList[]

export type ICreateTodo = {
  title: string,
  listId: string
}

export type ICreatedTodo = {
  title: string,
  userId: string,
  listId: string
}
