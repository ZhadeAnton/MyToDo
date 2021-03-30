import {createSelector} from 'reselect'
import {RootState} from '../store'
import {VISIBILITY_FILTERS} from './todoConstants'

const getTodosState = (state: RootState) => state.todo

export const getTodoList = createSelector(
    [getTodosState],
    (todo) => todo.allIds
)

export const getTodoById = (state: RootState, id: number) =>
  getTodosState(state) ? {...getTodosState(state).byIds[id], id} : {}

export const getTodos = (state: RootState) =>
  getTodoList(state).map((id) => getTodoById(state, id))

export const getTodosByVisibilityFilter =
  (state: RootState, visibilityFilter: string) => {
    const allTodos = getTodos(state)
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return allTodos.filter((todo) => todo.completed)
      case VISIBILITY_FILTERS.INCOMPLETE:
        return allTodos.filter((todo) => !todo.completed)
      case VISIBILITY_FILTERS.ALL:
      default:
        return allTodos
    }
  }
;
