import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './RootReducer'
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
