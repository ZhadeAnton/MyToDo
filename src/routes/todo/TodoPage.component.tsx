import React, {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import {
  TodoListProps } from '../../containers/TodoPageContainer'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.component'
import TodoContent from '../../components/todo/todoContent/todoContent'

const TodoPage: React.FC<TodoListProps> = (props) => {
  useEffect(() => {
    props.getLists()
  }, [])

  return (
    <section className={styles.todoPage}>
      <div className={styles.todoWrapper}>
        <aside className={styles.todoDrawer}>
          <TodoDrawer
            lists={props.lists}
          />
        </aside>

        <section className={styles.todoContent}>
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
      </div>
    </section>
  )
}

export default TodoPage
