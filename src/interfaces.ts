export interface ITodo {
  title: string,
  listId: string,
  userId: string,
  id: string,
  completed: boolean,
  important: boolean
  timestamp: any,
  planned?: string
  steps: Array<ITodoStep>,
}

export type ISelecteTodo = ITodo | null

export interface ITodoStep {
  stepTitle: string,
}

export interface IAddTodoStep extends ITodoStep {
  todoId: string
}

export interface IDeleteTodoStep {
  todoId: string,
  step: ITodoStep
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

export interface ICreateTodo {
  title: string,
  listId: string
}

export interface IUpdatedTodo extends ICreateTodo {
  userId: string,
}
