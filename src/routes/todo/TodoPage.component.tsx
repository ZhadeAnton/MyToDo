import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'

import styles from './todoPage.module.scss'
import { ITodo, ITodoList } from '../../interfaces'
import {
  TodoListProps } from '../../containers/TodoPageContainer'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoContent from '../../components/todo/todoContent/todoContent'
import TodoDetails from '../../components/todo/todoDetails/TodoDetails'

interface FilterTodos {
  [key: string]: (todos: Array<ITodo>) => Array<ITodo>
}

interface SortTodos {
  [key: string]: (a: any, b: any) => number
}

const TodoPage: React.FC<TodoListProps> = (props) => {
  const [sortBy, setSortBy] = useState<string>('date')

  const userId = props.user?.uid
  const listId = props.match.params.listid || ''
  const path = props.match.path
  const currentList = props.lists?.find((list: ITodoList) =>
    list.id === listId)

  useEffect(() => {
    props.closeSelectedTodo()

    props.getTodos(userId!)
    props.getLists(userId!)
  }, [props.match, props.user])

  const getTodosByFilter: FilterTodos = ({
    '/todo': (todos) => todos.filter((t) => t),
    '/todo/tasks': (todos) => todos.filter((t) => t),
    '/todo/unlisted': (todos) => todos.filter((t) => t.listId === ''),
    '/todo/important': (todos) => todos.filter((t: any) => t.important),
    '/todo/planned': (todos) => todos.filter((t) => t.planned)
  })

  const getTodosByLists = (listId: string, todos: Array<ITodo>) =>
    todos.filter((t) => t.listId === listId)

  const todos = listId
  ? getTodosByLists(listId, props.todos)
  : getTodosByFilter[path](props.todos)

  const handleSubmit = (title: string) => {
    props.createTodo({
      title,
      userId: userId || '',
      listId: listId || ''
    })
  }

  function handleSortChange(sort: string) {
    setSortBy(sort)
  }

  const sortFn: SortTodos = {
    title: (a, b) => a.title.localeCompare(b.title),
    date: (a, b) => b.timestamp - a.timestamp,
    important: (a, b) => b.important - a.important,
    completed: (a, b) => b.completed - a.completed,
    unCompleted: (a, b) => a.completed - b.completed
  }

  const sortedTodos = sortBy ? todos.slice().sort(sortFn[sortBy]) : todos

  if (!userId) return <Spin />

  return (
    <section className={styles.todoPage}>
      <aside className={styles.todoDrawer}>
        <TodoDrawer
          user={props.user}
          lists={props.lists}
          createList={props.createList}
          deleteList={props.deleteList}
        />
      </aside>

      <section className={styles.todoContent}>
        <Switch>
          <Route
            path="/todo/:listId"
            render={() => <TodoContent
              todos={sortedTodos}
              lists={props.lists}
              path={path}
              userId={userId}
              listId={listId}
              checkedSort={sortBy}
              selectedTodo={props.selectedTodo}
              currentList={currentList}
              getTodos={props.getListTodos}
              createTodo={props.createTodo}
              deleteTodo={props.deleteTodo}
              updateTodo={props.updateTodo}
              handleSubmit={handleSubmit}
              onCloseSelectedTodo={props.closeSelectedTodo}
              onSelectTodo={props.selectTodo}
              handleSortChange={handleSortChange}
            />}
          />
        </Switch>
      </section>

      <aside className={styles.todoDetails}>
        { props.selectedTodo &&
          <TodoDetails
            selectedTodo={props.selectedTodo}
            addTodoStep={props.addTodoStep}
            deleteTodoStep={props.deleteTodoStep}
            onSelectTodo={props.selectTodo}
            onCloseSelectedTodo={props.closeSelectedTodo}
            onDelete={props.deleteTodo}
            onUpdate={props.updateTodo}
          />
        }
      </aside>
    </section>
  )
}

export default TodoPage
