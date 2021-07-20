import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import persistReducer from '../Store/RootReducer'
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]

const store = createStore(persistReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export default store
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof persistReducer>
export type AppDispatch = typeof store.dispatch
