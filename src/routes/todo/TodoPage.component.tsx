import React, {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import {
  TodoListProps } from '../../containers/todoListContainer/TodoPageContainer'
import todoBg from '../../assets/todo/todo-bg.webp'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoContent from '../../components/todo/todoContent/todoContent'

const TodoPage: React.FC<TodoListProps> = ({
  match,
  todos,
  lists,
  getLists,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
}) => {
  useEffect(() => {
    getLists()
  }, [])

  return (
    <section className={styles.todoPage}>
      <div className={styles.todoWrapper}>
        <section className={styles.aside}>

          <TodoDrawer
            lists={lists}
          />
        </section>

        <section className={styles.content}>
          <Switch>
            <Route
              path="/todo/:listId?"
              render={() => <TodoContent
                todos={todos}
                lists={lists}
                match={match}
                getTodos={getTodos}
                createTodo={createTodo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />}
            />
          </Switch>
        </section>

        <div className={styles.background}>
          <img src={todoBg} alt="background"/>
        </div>
      </div>
    </section>
  )
}

export default TodoPage
