import React, {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import {
  TodoListProps } from '../../containers/TodoPageContainer'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoContent from '../../components/todo/todoContent/todoContent'
import { Spin } from 'antd'
import { ITodo, ITodoList } from '../../interfaces'

interface FilterTodos {
  [key: string]: (todos: Array<ITodo>) => Array<ITodo>
}

const TodoPage: React.FC<TodoListProps> = (props) => {
  const userId = props.user?.uid
  const listId = props.match.params.listid || ''
  const path = props.match.path
  const currentList = props.lists?.find((list: ITodoList) =>
    list.id === listId)

  useEffect(() => {
    if (props.user) {
      props.getLists(props.user?.uid)
      props.getTodos(props.user?.uid)
    }
  }, [props.user, props.match])

  const getTodosByFilter: FilterTodos = ({
    '/todo': (todos) => todos,
    '/todo/general': (todos) => todos,
    '/todo/important': (todos) => todos.filter((t: any) => t.important),
    // 'planned': (todos: Array<ITodo) => todos.filter((t) => t.planned)
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

  if (!userId) return <Spin />

  return (
    <section className={styles.todoPage}>
      <div className={styles.todoWrapper}>
        <aside className={styles.todoDrawer}>
          <TodoDrawer
            user={props.user}
            lists={props.lists}
          />
        </aside>

        <section className={styles.todoContent}>
          <Switch>
            <Route
              path="/todo/:listId"
              render={() => <TodoContent
                todos={todos}
                lists={props.lists}
                currentList={currentList}
                userId={userId}
                listId={listId}
                getTodos={props.getListTodos}
                createTodo={props.createTodo}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
                handleSubmit={handleSubmit}
              />}
            />
          </Switch>
        </section>
      </div>
    </section>
  )
}

export default TodoPage
