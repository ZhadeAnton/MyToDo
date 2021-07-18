import { ITodo } from '../../interfaces'

interface FilterTodos {
  [key: string]: (todos: Array<ITodo>) => Array<ITodo>
}

interface SortTodos {
  [key: string]: (a: any, b: any) => number
}

export const getTodosByFilter: FilterTodos = ({
  '/todo': (todos) => todos.filter((t) => t),
  '/todo/unlisted': (todos) => todos.filter((t) => t.listId === ''),
  '/todo/important': (todos) => todos.filter((t: any) => t.important),
  '/todo/planned': (todos) => todos.filter((t) => t.planned)
})

export const sortFn: SortTodos = {
  title: (a, b) => a.title.localeCompare(b.title),
  date: (a, b) => b.timestamp - a.timestamp,
  important: (a, b) => b.important - a.important,
  completed: (a, b) => b.completed - a.completed,
  unCompleted: (a, b) => a.completed - b.completed
}
