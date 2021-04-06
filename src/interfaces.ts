export interface ITodo {
  title: string,
  listId: string,
  id: string,
  completed: boolean
}

export type ITodoRecive = ITodo[] | undefined

export interface ITodoList {
  title: string,
  id: string
}

export type ITodoListRecive = ITodoList[] | undefined
