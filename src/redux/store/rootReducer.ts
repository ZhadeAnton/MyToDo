import {combineReducers} from 'redux';
import todoReducer from '../todo/todoReducer';
import userReducer from '../user/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
})

export default rootReducer
