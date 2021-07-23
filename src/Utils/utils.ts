import { ITodo } from '../Interfaces/TodoInterfaces'

interface FilterTodos {
  [key: string]: (todos: Array<ITodo>) => Array<ITodo>
}

interface SortTodos {
  [key: string]: (a: any, b: any) => number
}

export const getTodosByFilter: FilterTodos = ({
  '/': (todos) => todos.filter((t) => t),
  '/unlisted': (todos) => todos.filter((t) => t.listId === ''),
  '/important': (todos) => todos.filter((t: any) => t.important),
  '/planned': (todos) => todos.filter((t) => t.planned)
})

export const sortFn: SortTodos = {
  title: (a, b) => a.title.localeCompare(b.title),
  date: (a, b) => b.timestamp - a.timestamp,
  important: (a, b) => b.important - a.important,
  completed: (a, b) => b.completed - a.completed,
  unCompleted: (a, b) => a.completed - b.completed
}
