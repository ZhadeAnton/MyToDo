import React from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import TodoListContainer
  from '../../containers/todoListContainer/TodoListContainer'
import todoBg from '../../assets/todo/todo-bg.webp'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'

const TodoPage = () => {
  return (
    <section className={styles.todoPage}>
      <section className={styles.aside}>
        <TodoDrawer />
      </section>

      <section className={styles.content}>
        <Switch>
          <Route
            path="/todo/:listId?"
            component={TodoListContainer}
          />
        </Switch>
      </section>

      <div className={styles.background}>
        <img src={todoBg} alt="background"/>
      </div>
    </section>
  )
}

export default TodoPage
