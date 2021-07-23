import {createSelector} from 'reselect'
import {RootState} from '../Store/Store'

const selectTodoState = (state: RootState) => state.todo

export const selectCurrentTodos = createSelector(
    [selectTodoState],
    (todoState) => todoState.todos
)

export const selectCurrentLists = createSelector(
    [selectTodoState],
    (todoState) => todoState.lists
)

export const selectTodoForDetails = createSelector(
    [selectTodoState],
    (todoState) => todoState.selectedTodo
)
