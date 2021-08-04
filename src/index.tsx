import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import store from './Redux/Store/Store'
import { persistor } from './Redux/Store/Store'
import AppContainer from './containers/AppContainer';
import NotificationProvider from './Providers/NotificationProvider';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename='/MyToDo'>
          <NotificationProvider>
            <AppContainer />
          </NotificationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
