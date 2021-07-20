import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import store from './Redux/Store/Store'
import { persistor } from './Redux/Store/Store'

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
