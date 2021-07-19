import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../Hooks/usePreTypedHooks';
import { useRouteMatch, Redirect } from 'react-router-dom'

import * as interfaces from '../Interfaces/interfaces';
import * as actions from '../Redux/Todo/todoActionCreators'
import * as selectors from '../Redux/Todo/todoSelectors';
import { signOutStart } from '../Redux/User/userActionCreators'
import { selectCurrentUser } from '../Redux/User/userSelectors';
import TodoPage from '../Routes/Todo/TodoPage.component';
import { getTodosByFilter, sortFn } from '../Routes/Todo/utils';
import { IUser } from '../Redux/User/userInterfaces';

export interface ITodoContainer {
    user: IUser | undefined,
    userId: IUser['id'],
    lists: interfaces.ArrayOfTodoLists,
    path: string,
    listId: string,
    sortBy: string,
    currentList: interfaces.ITodoList | undefined,
    selectedTodo: interfaces.ITodo,
    sortedTodos: interfaces.ArrayOfTodos,
    sortedTodosByList: interfaces.ArrayOfTodos,
    handleGetTodos: interfaces.IFnGetTodos,
    handleGetLists: interfaces.IFnGetLists,
    handleDeleteTodo: interfaces.IFnDeleteTodo,
    handleCreateTodo: interfaces.IFnCreateTodo,
    handleUpdateTodo: interfaces.IFnUpdateTodo,
    handleCreateList: interfaces.IFnCreateList,
    handleDeleteList: interfaces.IFnDeleteList,
    handleSelectTodo: interfaces.IFnSelectTodo,
    handleAddTodoStep: interfaces.IFnAddTodoStep,
    handleGetListTodos: interfaces.IFnGetListTodos,
    handleDeleteTodoStep: interfaces.IFnDeleteTodoStep,
    handleSetDateTodo: interfaces.IFnSetDateSelectedTodo,
    handleCloseSelectedTodo: interfaces.IFnCloseSelectedTodo,
    handleRemoveDateTodo: interfaces.IFnRemoveDateSelectedTodo,
    handleChangeTodoTitle: interfaces.IFnChangeTitleSelectedTodo,
    handleSignOut: () => void,
    handleSort: (sort: string) => void,
    handleSubmit: (title: string) => void
}

export default function TodoPageContainer() {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const routeMatch = useRouteMatch()
  const listId2 = useRouteMatch('/todo/:listid')

  const [sortBy, setSortBy] = useState<string>('date')

  const user = selectCurrentUser(state)
  const todos = selectors.selectCurrentTodos(state)
  const lists = selectors.selectCurrentLists(state)
  const selectedTodo = selectors.selectTodoForDetails(state)

  const userId = user?.uid
  const listId = location.pathname
  const path = location.pathname
  const currentList = lists?.find((list: interfaces.ITodoList) => list.id === listId)

  console.log(routeMatch)
  console.log(listId2?.params)

  useEffect(() => {
    handleCloseSelectedTodo()

    handleGetTodos(userId!)
    handleGetLists(userId!)
  }, [location, user])

  const getTodosByLists = (listId: string, todos: Array<interfaces.ITodo>) =>
    todos.filter((t) => t.listId === listId)

  const sortedTodosByList = listId
  ? getTodosByLists(listId, todos)
  : getTodosByFilter[path](todos)

  const sortedTodos = sortBy ? todos.slice().sort(sortFn[sortBy]) : todos

  const handleSubmit = (title: string) => {
    handleCreateTodo({
      title,
      userId: userId || '',
      listId: listId || ''
    })
  }

  function handleSort(sort: string) {
    setSortBy(sort)
  }

  const handleSignOut = () => dispatch(signOutStart())

  const handleGetTodos: interfaces.IFnGetTodos = (userId) => {
    dispatch(actions.getAllTodos(userId))
  }

  const handleGetLists: interfaces.IFnGetLists = (userId) => {
    dispatch(actions.getLists(userId))
  }

  const handleGetListTodos: interfaces.IFnGetListTodos = (listId) => {
    dispatch(actions.getListTodos(listId))
  }

  const handleCreateTodo: interfaces.IFnCreateTodo = ({title, userId, listId}) => {
    dispatch(actions.createTodo({title, userId, listId}))
  }

  const handleCreateList: interfaces.IFnCreateList = (userId, title) => {
    dispatch(actions.createList(userId, title))
  }

  const handleAddTodoStep: interfaces.IFnAddTodoStep = (todoId, stepTitle) => {
    dispatch(actions.addTodoStep(todoId, stepTitle))
  }

  const handleUpdateTodo: interfaces.IFnUpdateTodo = (todoId, data) => {
    dispatch(actions.updateTodo(todoId, data))
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

  const handleDeleteTodo: interfaces.IFnDeleteTodo = (todo) => {
    dispatch(actions.deleteTodo(todo))
  }

  const handleDeleteTodoStep: interfaces.IFnDeleteTodoStep = (todoId, step) => {
    dispatch(actions.deleteTodoStep(todoId, step))
  }

  const handleDeleteList: interfaces.IFnDeleteList = (listId) => {
    dispatch(actions.deleteList(listId))
  }

  if (!userId) return <Redirect to="/login" />

  return (
    <TodoPage
      user={user}
      lists={lists}
      sortBy={sortBy}
      path={path}
      userId={userId}
      listId={listId}
      currentList={currentList}
      selectedTodo={selectedTodo}
      sortedTodos={sortedTodos}
      sortedTodosByList={sortedTodosByList}
      handleGetTodos={handleGetTodos}
      handleCreateList={handleCreateList}
      handleDeleteList={handleDeleteList}
      handleSignOut={handleSignOut}
      handleCreateTodo={handleCreateTodo}
      handleGetListTodos={handleGetListTodos}
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
