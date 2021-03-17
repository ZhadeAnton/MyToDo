import {UserTypes, SET_CURRENT_USER} from './user-types'
import {IUser} from './user-Itypes'

export const setUser = (user: IUser): UserTypes => ({
  type: SET_CURRENT_USER,
  payload: user
})
