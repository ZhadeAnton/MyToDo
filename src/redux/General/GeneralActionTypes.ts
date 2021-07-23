import { INotification } from '../../Interfaces/NotificationInterfaces'

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export interface AddNotification {
  type: typeof ADD_NOTIFICATION,
  payload: INotification
}

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
export interface RemoveNotification {
  type: typeof REMOVE_NOTIFICATION,
  payload: INotification['id']
}

export type GeneralTypes =
|AddNotification
|RemoveNotification
