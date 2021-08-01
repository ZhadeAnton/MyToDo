import React, { createContext } from 'react'

import { IFnRemoveNotification } from '../Interfaces/NotificationInterfaces';
import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHooks';
import { removeNotification } from '../Redux/General/GeneralActionCreators';

import Notification from '../components/Notification/Notification'

const NotificationContext = createContext('');

export default function NotificationProvider(props: any) {
  const notifications = useAppSelector((state) => state.general.notifications)

  const dispatch = useAppDispatch()

  const handleRemoveNotification: IFnRemoveNotification = (id) => {
    dispatch(removeNotification(id))
  }

  return (
    <NotificationContext.Provider value={''}>
      <div className='notifications-wrapper'>
        <ul>
          {
            notifications.map((note) => {
              return (
                <Notification
                  key={note.id}
                  {...note}
                  onRemoveNotification={handleRemoveNotification}
                />
              )
            })
          }
        </ul>
      </div>
      {props.children}
    </NotificationContext.Provider>
  )
}
