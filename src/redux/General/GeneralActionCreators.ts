import * as actions from './GeneralActionTypes'
import {
  IFnAddNotification,
  INotification } from '../../Interfaces/NotificationInterfaces'

export const addNotification: IFnAddNotification = (type, message, id)
: actions.AddNotification => ({
  type: actions.ADD_NOTIFICATION,
  payload: { type, message, id }
})

export const removeNotification = (id: INotification['id'])
  : actions.RemoveNotification => ({
  type: actions.REMOVE_NOTIFICATION,
  payload: id
})
