import {createSelector} from 'reselect'
import {RootState} from '../store/store'

const selectUser = (state: RootState) => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export const selectUserError = createSelector(
    [selectUser],
    (user) => user.userError
)

export const selectUserLoading = createSelector(
    [selectUser],
    (user) => user.isLoading
)
