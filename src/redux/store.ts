import {combineReducers, createStore, applyMiddleware} from 'redux';
import userReducer from './user/user.reducer'
import logger from 'redux-logger'

const middlewares = [logger]

const store = createStore(
    combineReducers({
      user: userReducer
    }), applyMiddleware(...middlewares)
)

export default store
