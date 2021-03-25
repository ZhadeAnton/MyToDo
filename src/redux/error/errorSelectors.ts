import {createSelector} from 'reselect'
import {RootState} from '../store'

const selectError = (state: RootState) => state.error

export const selectCurrentUser = createSelector(
    [selectError],
    (error) => error
)
