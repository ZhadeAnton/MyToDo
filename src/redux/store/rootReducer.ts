import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import generalReducer from '../General/GeneralReducer';

import todoReducer from '../Todo/todoReducer'
import userReducer from '../User/userReducer'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['todo', 'general']
}

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  general: generalReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
