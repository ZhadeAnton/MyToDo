export interface ITodo {
  title: string,
  id: string
}

export type ITodoRecive = ITodo[] | undefined

interface ITodoList {
  title: string,
  id: string
}

export type ITodoListRecive = ITodoList[] | undefined
