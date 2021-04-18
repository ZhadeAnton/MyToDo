import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  ICreatedTodo,
  ITodo,
  ITodoList,
} from '../interfaces';

import { TodoState } from '../redux/todo/todoReducer';
import { RootState } from '../redux/store/store';
import { TodoTypes } from '../redux/todo/todoActionTypes';
import {
  getAllTodos,
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
    },
    path: string,
    url: string
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
  getTodos: (userId: string) => void,
  getListTodos: (listId: string) => void,
  createTodo: ({}: ICreatedTodo) => void,
  getLists: (userId: string) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todo: string) => void
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: state.todo.todos,
  lists: state.todo.lists,
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<TodoTypes>): DispatchProps => ({
  getTodos: (userId: string) => dispatch(getAllTodos(userId)),
  getLists: (userId: string) => dispatch(getLists(userId)),
  getListTodos: (listId: string) => dispatch(getListTodos(listId)),
  createTodo: ({title, userId, listId}: ICreatedTodo) =>
    dispatch(createTodo({title, userId, listId})),
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
