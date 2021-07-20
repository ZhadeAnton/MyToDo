import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../Hooks/usePreTypedHooks';
import { withRouter } from 'react-router'

import * as interfaces from '../Interfaces/interfaces';
import * as actions from '../Redux/Todo/todoActionCreators'
import * as selectors from '../Redux/Todo/todoSelectors';
import { signOutStart } from '../Redux/User/userActionCreators'
import { getTodosByFilter, sortFn } from '../Routes/Todo/utils';
import { IUser } from '../Redux/User/userInterfaces';

import TodoPage from '../Routes/Todo/TodoPage.component';
import { selectCurrentUser } from '../Redux/User/userSelectors';
import { Redirect } from 'react-router-dom';

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
    handleSort: interfaces.IFnSortTodos,
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

export const TodoPageContainerWithrouter = withRouter(TodoPageContainer)
