import React, { useState, useEffect } from 'react';

import './notification.scss'
import {
  INotification,
  IFnRemoveNotification } from '../../Interfaces/NotificationInterfaces';

interface Props {
  id: INotification['id'],
  type: INotification['type'],
  message: INotification['message'],
  onRemoveNotification: IFnRemoveNotification
}

export default function Notification(props: Props) {
  const [exit, setExit] = useState(false)
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState<any>(null)

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5
        }

        clearInterval(id)
        return prev;
      });
    }, 20)

    setIntervalID(id)
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID)
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.onRemoveNotification(props.id)
    }, 400)
  }

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification()
    }
  }, [width])

  useEffect(() => {
    handleStartTimer()
  }, [])

  return (
    <div
      className={`notification-item ${
      props.type === 'SUCCESS' ? 'notification-item__success' : 'notification-item__error'
      } ${exit ? 'exit' : ''}`}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
    >
      <div className='notification-item__content'>
        <i className={`bi ${props.type === 'SUCCESS'
        ? 'bi-check-lg' : 'bi-exclamation-triangle'} notification-item__content--icon`} />

        <p className='notification-item__content--message'>
          {props.message}
        </p>
      </div>

      <div className='bar' style={{ width: `${width}%` }} />
    </div>
  )
}
