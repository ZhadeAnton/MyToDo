import {combineReducers} from 'redux';
import userReducer from './user/userReducer'
import errorReducer from './error/errorReduces'

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer
})

export default rootReducer
