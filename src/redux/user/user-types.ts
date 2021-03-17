import {IUser} from './user-@types'
export const SET_CURRENT_USER = 'SET CURRENT USER'

interface SetCurrentUser {
  type: typeof SET_CURRENT_USER,
  payload: IUser
}

export type UserTypes = SetCurrentUser
