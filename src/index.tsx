import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store from './Redux/Store/Store'
import { persistor } from './Redux/Store/Store'

import AppContainer from './Containers/AppContainer';
import NotificationProvider from './Providers/NotificationProvider';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <NotificationProvider>
            <AppContainer />
          </NotificationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
