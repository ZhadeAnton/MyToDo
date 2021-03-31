import React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {RootState} from '../../../redux/store'
import {TodoTypes} from '../../../redux/todo/todoActionTypes';

import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter
} from '../../../redux/todo/todoActionCreators';
import {getTodosByVisibilityFilter} from '../../../redux/todo/todoSelectors';
import {ITodo} from '../../../redux/todo/todoInterfaces';
import TodoList from '../todoList/TodoList.component';
import AddTodo from '../addTodo/AddTodo.component';
import
VisibilityFilters from '../visibilityFilters/VisibilityFilters.component';

interface StateProps {
  todos: ITodo[],
  activeFilter: string
}

interface DispatchProps {
  addTodo: (title: string) => void,
  toggleTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  setFilter: (filter: string) => void
}

// interface OwnProps {
//   completed: boolean,
//   title: string,
//   id: number
// }

type TodoProps = StateProps & DispatchProps

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

const TodoComponent = (props: TodoProps) => {
  return (
    <div>
      <TodoList
        todos={props.todos}
        toggleTodo={props.toggleTodo}
        deleteTodo={props.deleteTodo}
      />
      <AddTodo
        addTodo={props.addTodo}
      />
      <VisibilityFilters
        activeFilter={props.activeFilter}
        setFilter={props.setFilter}
      />
    </div>
  )
}


export default connect<StateProps, DispatchProps, null, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent)
