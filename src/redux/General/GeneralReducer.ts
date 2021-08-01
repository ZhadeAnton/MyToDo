import { IArrayOfNotifications } from '../../Interfaces/NotificationInterfaces'
import * as generalActions from './GeneralActionTypes'

interface IGeneralState {
  notifications: IArrayOfNotifications
}

const INITIAL_STATE: IGeneralState = {
  notifications: []
}

const generalReducer = (state = INITIAL_STATE, action: generalActions.GeneralTypes) => {
  switch (action.type) {
    case generalActions.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, {...action.payload}]
      }

    case generalActions.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((note) => note.id !== action.payload)
      }

    default:
      return state
  }
}

export default generalReducer
