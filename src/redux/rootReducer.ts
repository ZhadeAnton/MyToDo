import {combineReducers} from 'redux';
import todoReducer from './todo/todoReducer';
import visibilityFilterReducer from './todo/todVisibilityFilter'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  visibilityFilter: visibilityFilterReducer
})

export default rootReducer
