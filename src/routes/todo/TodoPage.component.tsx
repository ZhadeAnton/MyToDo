import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as api from '../../api'
import DBContext from '../../context/db.context'
import { ITodoListRecive } from '../../interfaces'

import styles from './todoPage.module.scss'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoListContainer
  from '../../containers/todoListContainer/TodoListContainer'
import todoBg from '../../assets/todo/todo-bg.webp'

const TodoPage = () => {
  const db = useContext(DBContext)
  const [lists, setLists] = useState<ITodoListRecive>()

  useEffect(() => {
    db.getLists().then(setLists)
  }, [db]);

  return (
    <DBContext.Provider value={{ lists, ...api }}>
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
    </DBContext.Provider>
  )
}

export default TodoPage
