import { connect } from 'react-redux'
import { Dispatch, compose } from 'redux'

import {
  ITodo,
  ITodoList,
} from '../interfaces';

import { TodoState } from '../redux/todo/todoReducer';
import { RootState } from '../redux/store/store';
import { TodoTypes } from '../redux/todo/todoActionTypes';
import {
  getLists,
  getListTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../redux/todo/todoActionCreators'
import TodoPage from '../routes/todo/TodoPage.component';

interface OwnProps extends TodoState {
  match: {
    params: {
      listid: string
    }
  }
  list: ITodoList,
  handleSelect: (todo: ITodo) => void,
  handleCloseDetail: () => void
}

interface StateProps {
  todos: Array<ITodo> | [],
  lists: Array<ITodoList> | []
}

interface DispatchProps {
  getLists: () => void,
  getTodos: (listId: string) => void,
  createTodo: (title: string, listId: string) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todo: string) => void
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: state.todo.todos,
  lists: state.todo.lists
})

const mapDispatchToProps = (dispatch: Dispatch<TodoTypes>): DispatchProps => ({
  getLists: () => dispatch(getLists()),
  getTodos: (listId: string) => dispatch(getListTodos(listId)),
  createTodo: (title: string, listId: string) =>
    dispatch(createTodo(title, listId)),
  updateTodo: (todoId: string, data: {}) => dispatch(updateTodo(todoId, data)),
  deleteTodo: (todo: string) => dispatch(deleteTodo(todo))
})

const TodoPageContainer = compose(
    connect<StateProps, DispatchProps, OwnProps, RootState>(
        mapStateToProps,
        mapDispatchToProps
    )
)(TodoPage)

export type TodoListProps = StateProps & DispatchProps & OwnProps
export default TodoPageContainer
