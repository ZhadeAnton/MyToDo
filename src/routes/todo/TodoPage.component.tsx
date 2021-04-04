import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import todoBg from '../../assets/todo/todo-bg.webp'

import { get } from '../../api'
import DBContext from '../../context/db.context'
import { ITodoRecive, ITodoListRecive } from '../../interfaces'

import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoList from '../../components/todo/todoList/TodoList.component'

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodoRecive>()
  const [lists, setLists] = useState<ITodoListRecive>()

  useEffect(() => {
    get('todos').then(setTodos)
    get('lists').then(setLists)
  }, []);

  return (
    <DBContext.Provider value={{ todos, lists }}>
      <section className={styles.todoPage}>
        <section className={styles.aside}>
          <TodoDrawer />
        </section>

        <section className={styles.content}>
          <Switch>
            <Route
              path="/todo/:listId?"
              component={TodoList}
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
