import { IUser } from './UserInterfaces'

export interface ITodo {
  id: string,
  title: string,
  listId: string,
  userId: string,
  completed: boolean,
  important: boolean
  timestamp: any,
  planned?: string
  steps: Array<ITodoStep>,
}

export interface ITodoList {
  title: string,
  id: string,
  userId: string,
}

export type ArrayOfTodos = Array<ITodo>
export type ArrayOfTodoLists = Array<ITodoList>

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

export interface IFnGetTodos {
  (userId: IUser['id']): any
}

export interface IFnUpdateTodo {
  (userId: IUser['id'], todoId: ITodo['id'], data: {}): any
}

export interface IFnUpdateTodoSuccess {
  (updatedTodo: ITodo): any
}

export interface IFnAddTodoStep {
 (todoId: string, stepTitle: string): any
}

export interface IFnDeleteTodo {
  (userId: IUser['id'], todoId: ITodo['id']): any
}

export interface IFnDeleteTodoStep {
  (todoId: ITodo['id'], step: ITodoStep): any
}

export interface IFnCreateList {
  (userId: IUser['id'], title: ITodoList['title']): any
}

export interface IFnDeleteListSuccess {
  (listId: ITodoList['id']): any
}

export interface IFnTodosFailure {
  (error: string): any
}

export interface IFnDeleteList {
  (userId: IUser['id'], listId: ITodoList['id']): any
}

export interface IFnGetListTodos {
  (listId: ITodoList['id']): any
}

export interface IFnGetAllTodosSuccess {
  (todos: ArrayOfTodos): any
}

export interface IFnGetListTodosSuccess {
  (todos: ArrayOfTodos): any
}

export interface IFnGetLists {
  (userId: IUser['id']): any
}

export interface IFnGetListsSuccess {
  (lists: ArrayOfTodoLists): any
}

export interface IFnCreateTodo {
  ({title, listId, userId}: IUpdatedTodo): any
}

export interface IFnCreateTodoSuccess {
  (newTodo: ITodo): any
}

export interface IFnCreateListSuccess {
  ({title, id, userId}: ITodoList): any
}

export interface IFnSelectTodo {
  (todo: ITodo): any
}

export interface IFnChangeTitleSelectedTodo {
  (title: ITodo['title']): any
}

export interface IFnSetDateSelectedTodo {
  (date: string): any
}

export interface IFnRemoveDateSelectedTodo {
  (): any
}

export interface IFnCloseSelectedTodo {
  (): any
}

export interface IFnSortTodos {
  (sort: string): any
}
