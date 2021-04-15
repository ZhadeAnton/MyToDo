import React, {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import {
  TodoListProps } from '../../containers/TodoPageContainer'
import todoBg from '../../assets/todo/todo-bg.webp'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoContent from '../../components/todo/todoContent/todoContent'

const TodoPage: React.FC<TodoListProps> = (props) => {
  useEffect(() => {
    props.getLists()
  }, [])

  return (
    <section className={styles.todoPage}>
      <div className={styles.todoWrapper}>
        <section className={styles.aside}>

          <TodoDrawer
            lists={props.lists}
          />
        </section>

        <section className={styles.content}>
          <Switch>
            <Route
              path="/todo/:listId?"
              render={() => <TodoContent
                todos={props.todos}
                lists={props.lists}
                match={props.match}
                getTodos={props.getTodos}
                createTodo={props.createTodo}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
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
