import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  IUpdatedTodo,
  ITodo,
  ITodoList,
  ITodoStep,
} from '../interfaces';

import { TodoState } from '../redux/todo/todoReducer';
import { RootState } from '../redux/store/store';
import { TodoTypes } from '../redux/todo/todoActionTypes';
import {
  getAllTodos,
  getLists,
  getListTodos,
  createTodo,
  createList,
  addTodoStep,
  deleteTodo,
  deleteTodoStep,
  deleteList,
  updateTodo,
} from '../redux/todo/todoActionCreators'
import TodoPage from '../routes/todo/TodoPage.component';
import { IUser } from '../redux/user/userInterfaces';
import {
  selectCurrentLists,
  selectCurrentTodos } from '../redux/todo/todoSelectors';
import { selectCurrentUser } from '../redux/user/userSelectors';

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
  createTodo: ({}: IUpdatedTodo) => void,
  createList: (userId: string, title: string) => void,
  addTodoStep: (todoId: string, stepTitle: string) => void,
  getLists: (userId: string) => void,
  updateTodo: (todoId: string, data: {}) => void
  deleteTodo: (todoId: string) => void,
  deleteTodoStep: (todoId: string, step: ITodoStep) => void,
  deleteList: (listId: string) => void
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: selectCurrentTodos(state),
  lists: selectCurrentLists(state),
  user: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch: Dispatch<TodoTypes>): DispatchProps => ({
  getTodos: (userId: string) => dispatch(getAllTodos(userId)),
  getLists: (userId: string) => dispatch(getLists(userId)),
  getListTodos: (listId: string) => dispatch(getListTodos(listId)),
  createTodo: ({title, userId, listId}: IUpdatedTodo) =>
    dispatch(createTodo({title, userId, listId})),
  createList: (userId: string, title: string) =>
    dispatch(createList(userId, title)),
  addTodoStep: (todoId: string, stepTitle: string) =>
    dispatch(addTodoStep(todoId, stepTitle)),
  updateTodo: (todoId: string, data: {}) => dispatch(updateTodo(todoId, data)),
  deleteTodo: (todo: string) => dispatch(deleteTodo(todo)),
  deleteTodoStep: (todoId: string, step: ITodoStep) =>
    dispatch(deleteTodoStep(todoId, step)),
  deleteList: (listId: string) => dispatch(deleteList(listId))
})

const TodoPageContainer =
connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage)

export type TodoListProps = StateProps & DispatchProps & OwnProps
export default TodoPageContainer
