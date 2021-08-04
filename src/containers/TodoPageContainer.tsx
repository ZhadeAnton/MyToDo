import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../Hooks/usePreTypedHooks';
import { withRouter } from 'react-router'

import * as interfaces from '../Interfaces/TodoInterfaces';
import * as actions from '../Redux/Todo/todoActionCreators'
import * as selectors from '../Redux/Todo/todoSelectors';
import { signOutStart } from '../Redux/User/userActionCreators'
import { Redirect } from 'react-router-dom';
import { IUser } from '../Interfaces/UserInterfaces';
import { selectCurrentUser } from '../Redux/User/userSelectors';
import { getTodosByFilter, sortFn } from '../Utils/utils';

import TodoPage from '../Routes/Todo/TodoPage';
import { ITodoStep } from '../Interfaces/TodoInterfaces';
import Preloader from '../components/custom/Preloader/Preloader';

export interface ITodoContainer {
    user: IUser | null,
    userId: IUser['id'],
    lists: interfaces.ArrayOfTodoLists,
    path: string,
    listId: string,
    sortBy: string,
    currentList: interfaces.ITodoList | undefined,
    selectedTodo: interfaces.ITodo,
    filteredTodos: interfaces.ArrayOfTodos,
    handleGetTodos: interfaces.IFnGetTodos,
    handleGetLists: interfaces.IFnGetLists,
    handleCreateTodo: interfaces.IFnCreateTodo,
    handleUpdateTodo: interfaces.IFnUpdateTodo,
    handleCreateList: interfaces.IFnCreateList,
    handleSelectTodo: interfaces.IFnSelectTodo,
    handleSetDateTodo: interfaces.IFnSetDateSelectedTodo,
    handleCloseSelectedTodo: interfaces.IFnCloseSelectedTodo,
    handleRemoveDateTodo: interfaces.IFnRemoveDateSelectedTodo,
    handleChangeTodoTitle: interfaces.IFnChangeTitleSelectedTodo,
    handleSort: interfaces.IFnSortTodos,
    handleDeleteTodoStep: (todoId: interfaces.ITodo['id'], step: ITodoStep)=> void,
    handleAddTodoStep: (todoId: interfaces.ITodo['id'], step: ITodoStep)=> void,
    handleDeleteTodo: (todoId: interfaces.ITodo['id']) => void,
    handleDeleteList: (listId: interfaces.ITodoList['id']) => void,
    handleSignOut: () => void,
    handleSubmit: (title: string) => void
}

function TodoPageContainer(props: any) {
  const dispatch = useAppDispatch()

  const [sortBy, setSortBy] = useState<string>('date')

  const state = useAppSelector((state) => state)
  const user = selectCurrentUser(state)

  if (user === null) {
    return <Redirect to='/login'/>
  }

  const userId = user!.id
  const todos = selectors.selectCurrentTodos(state)
  const lists = selectors.selectCurrentLists(state)
  const selectedTodo = selectors.selectTodoForDetails(state)

  const listId = props.match.params.listid || ''
  const path = props.match.url
  const currentList = lists?.find((list: interfaces.ITodoList) => list.id === listId)

  useEffect(() => {
    handleCloseSelectedTodo()
    handleGetTodos(userId!)
    handleGetLists(userId!)
  }, [user, history])

  const getTodosByLists = (listId: string, todos: interfaces.ArrayOfTodos) =>
    todos.filter((t) => t.listId === listId)

  const filteredTodos = listId
  ? getTodosByLists(listId, todos)
  : getTodosByFilter[path](todos)

  const sortedTodos = sortBy
    ? filteredTodos.slice().sort(sortFn[sortBy]) : filteredTodos

  const handleSubmit = (title: string) => {
    handleCreateTodo({
      title,
      userId: userId || '',
      listId: listId || ''
    })
  }

  const handleSort: interfaces.IFnSortTodos = (sort) => {
    setSortBy(sort)
  }

  const handleSignOut = () => dispatch(signOutStart())

  const handleGetTodos: interfaces.IFnGetTodos = (userId) => {
    dispatch(actions.getAllTodos(userId))
  }

  const handleGetLists: interfaces.IFnGetLists = (userId) => {
    dispatch(actions.getLists(userId))
  }

  const handleCreateTodo: interfaces.IFnCreateTodo = ({title, userId, listId}) => {
    dispatch(actions.createTodo({title, userId, listId}))
  }

  const handleCreateList: interfaces.IFnCreateList = (userId, title) => {
    dispatch(actions.createList(userId, title))
  }

  const handleAddTodoStep = (todoId: interfaces.ITodo['id'], step: ITodoStep) => {
    dispatch(actions.addTodoStep(userId, todoId, step))
  }

  const handleUpdateTodo: interfaces.IFnUpdateTodo = (userId, todoId, data) => {
    dispatch(actions.updateTodo(userId, todoId, data))
  }

  const handleSelectTodo: interfaces.IFnSelectTodo = (todo) => {
    dispatch(actions.selectTodo(todo))
  }

  const handleChangeTodoTitle: interfaces.IFnChangeTitleSelectedTodo = (title) => {
    dispatch(actions.changeTitleSelectedTodo(title))
  }

  const handleSetDateTodo: interfaces.IFnSetDateSelectedTodo = (date) => {
    dispatch(actions.setDateSelectedTodo(date))
  }

  const handleRemoveDateTodo: interfaces.IFnRemoveDateSelectedTodo = () => {
    dispatch(actions.removeDateSelectedTodo())
  }

  const handleCloseSelectedTodo: interfaces.IFnCloseSelectedTodo = () => {
    dispatch(actions.closeSelectedTodo())
  }

  const handleDeleteTodo = (todoId: string) => {
    dispatch(actions.deleteTodo(userId, todoId))
  }

  const handleDeleteTodoStep = (todoId: interfaces.ITodo['id'], step: ITodoStep) => {
    dispatch(actions.deleteTodoStep(userId, todoId, step))
  }

  const handleDeleteList = (listId: string) => {
    dispatch(actions.deleteList(userId, listId))
  }


  if (todos.length == 0) return <Preloader />

  return (
    <TodoPage
      user={user}
      userId={userId}
      lists={lists}
      sortBy={sortBy}
      path={path}
      listId={listId}
      currentList={currentList}
      selectedTodo={selectedTodo}
      filteredTodos={sortedTodos}
      handleGetTodos={handleGetTodos}
      handleCreateList={handleCreateList}
      handleDeleteList={handleDeleteList}
      handleSignOut={handleSignOut}
      handleCreateTodo={handleCreateTodo}
      handleAddTodoStep={handleAddTodoStep}
      handleSelectTodo={handleSelectTodo}
      handleCloseSelectedTodo={handleCloseSelectedTodo}
      handleChangeTodoTitle={handleChangeTodoTitle}
      handleSetDateTodo={handleSetDateTodo}
      handleRemoveDateTodo={handleRemoveDateTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleDeleteTodoStep={handleDeleteTodoStep}
      handleUpdateTodo={handleUpdateTodo}
      handleGetLists={handleGetLists}
      handleSort={handleSort}
      handleSubmit={handleSubmit}
    />
  )
}

export const TodoPageContainerWithrouter = withRouter(TodoPageContainer)
