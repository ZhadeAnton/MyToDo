import {combineReducers} from 'redux';
import todoReducer from '../Todo/todoReducer';
import userReducer from '../User/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
})

export default rootReducer
