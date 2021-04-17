import { connect } from 'react-redux'
import { Dispatch } from 'redux'

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
import { IUser } from '../redux/user/userInterfaces';

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
  lists: Array<ITodoList> | [],
  user: IUser | undefined
}

interface DispatchProps {
  getLists: (userId: string) => void,
  getTodos: (listId: string) => void,
  createTodo: (title: string, listId: string, userId: string) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todo: string) => void
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: state.todo.todos,
  lists: state.todo.lists,
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<TodoTypes>): DispatchProps => ({
  getLists: (userId: string) => dispatch(getLists(userId)),
  getTodos: (listId: string) => dispatch(getListTodos(listId)),
  createTodo: (title: string, listId: string, userId: string) =>
    dispatch(createTodo(title, listId, userId)),
  updateTodo: (todoId: string, data: {}) => dispatch(updateTodo(todoId, data)),
  deleteTodo: (todo: string) => dispatch(deleteTodo(todo))
})

const TodoPageContainer =
connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage)

export type TodoListProps = StateProps & DispatchProps & OwnProps
export default TodoPageContainer
