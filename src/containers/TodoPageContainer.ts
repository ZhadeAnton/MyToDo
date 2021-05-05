import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as interfaces from '../interfaces';
import * as actions from '../redux/todo/todoActionCreators'
import { signOutStart } from '../redux/user/userActionCreators'
import * as selectors from '../redux/todo/todoSelectors';
import { TodoState } from '../redux/todo/todoReducer';
import { RootState } from '../redux/store/store';
import { TodoTypes } from '../redux/todo/todoActionTypes';
import { UserTypes } from '../redux/user/userActionTypes';
import { IUser } from '../redux/user/userInterfaces';
import { selectCurrentUser } from '../redux/user/userSelectors';
import TodoPage from '../routes/todo/TodoPage.component';

interface OwnProps extends TodoState {
  match: {
    params: {
      listid: string
    },
    path: string,
    url: string
  }
  list: interfaces.ITodoList,
  handleSelect: (todo: interfaces.ITodo) => void,
  handleCloseDetail: () => void
}

interface StateProps {
  todos: Array<interfaces.ITodo> | [],
  lists: Array<interfaces.ITodoList> | [],
  selectedTodo: interfaces.ISelecteTodo,
  user: IUser | undefined
}

interface DispatchProps {
  signOutStart: () => void,
  getTodos: (userId: string) => void,
  getListTodos: (listId: string) => void,
  getLists: (userId: string) => void,
  createTodo: ({}: interfaces.IUpdatedTodo) => void,
  selectTodo: (todo: interfaces.ITodo) => void,
  closeSelectedTodo: () => void,
  createList: (userId: string, title: string) => void,
  addTodoStep: (todoId: string, stepTitle: string) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todoId: string) => void,
  deleteTodoStep: (todoId: string, step: interfaces.ITodoStep) => void,
  deleteList: (listId: string) => void
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: selectors.selectCurrentTodos(state),
  lists: selectors.selectCurrentLists(state),
  selectedTodo: selectors.selectTodoForDetails(state),
  user: selectCurrentUser(state)
})

const mapDispatchToProps = (
    dispatch: Dispatch<TodoTypes | UserTypes>): DispatchProps => ({
  signOutStart: () => dispatch(signOutStart()),
  getTodos: (userId: string) => dispatch(actions.getAllTodos(userId)),
  getLists: (userId: string) => dispatch(actions.getLists(userId)),
  getListTodos: (listId: string) => dispatch(actions.getListTodos(listId)),
  createTodo: ({title, userId, listId}: interfaces.IUpdatedTodo) => dispatch(
      actions.createTodo({title, userId, listId})),
  createList: (userId: string, title: string) => dispatch(
      actions.createList(userId, title)),
  addTodoStep: (todoId: string, stepTitle: string) => dispatch(
      actions.addTodoStep(todoId, stepTitle)),
  updateTodo: (todoId: string, data: {}) => dispatch(
      actions.updateTodo(todoId, data)),
  selectTodo: (todo: interfaces.ITodo) => dispatch(actions.selectTodo(todo)),
  closeSelectedTodo: () => dispatch(actions.closeSelectedTodo()),
  deleteTodo: (todo: string) => dispatch(actions.deleteTodo(todo)),
  deleteTodoStep: (todoId: string, step: interfaces.ITodoStep) => dispatch(
      actions.deleteTodoStep(todoId, step)),
  deleteList: (listId: string) => dispatch(actions.deleteList(listId))
})

const TodoPageContainer =
connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage)

export type TodoListProps = StateProps & DispatchProps & OwnProps
export default TodoPageContainer
