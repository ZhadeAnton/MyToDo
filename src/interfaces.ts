export interface ITodo {
  title: string,
  listId: string,
  userId: string,
  id: string,
  completed: boolean,
  important: boolean
  timestamp: any,
  steps?: Array<ITodoStep>
}

export interface ITodoStep {
  text: string,
  completed: boolean
}

export interface ITodoList {
  title: string,
  id: string,
  userId: string,
}

export interface ICreateList {
  title: string,
  userId: string,
}

export type ICreateTodo = {
  title: string,
  listId: string
}

export type ICreatedTodo = {
  title: string,
  userId: string,
  listId: string
}
