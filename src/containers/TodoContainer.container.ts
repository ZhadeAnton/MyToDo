import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import TodoComponent
  from '../components/todo/todoComponent/TodoComponent.component';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter
} from '../redux/todo/todoActionCreators';
import {getTodosByVisibilityFilter} from '../redux/todo/todoSelectors';
import {ITodo} from '../redux/todo/todoInterfaces';
import {RootState} from '../redux/store/store'
import {TodoTypes} from '../redux/todo/todoActionTypes';

interface StateProps {
  todos: Array<ITodo>,
  activeFilter: string
}

interface DispatchProps {
  addTodo: (title: string) => void,
  toggleTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  setFilter: (filter: string) => void
}

const mapStateToProps = (state: RootState) => ({
  todos: getTodosByVisibilityFilter(state, (state.visibilityFilter)),
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<TodoTypes>) => ({
  addTodo: (title: string) => dispatch(addTodo(title)),
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  setFilter: (filter: string) => dispatch(setFilter(filter))
})

const TodoContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent)

export type TodoProps = StateProps & DispatchProps
export default TodoContainer
