import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './Redux/Store/Store'
import AppContainer from './Containers/AppContainer';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
