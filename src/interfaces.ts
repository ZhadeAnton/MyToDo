export interface ITodo {
  title: string,
  listId: string,
  id: string,
  completed: boolean
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
