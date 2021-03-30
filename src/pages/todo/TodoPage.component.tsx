import React from 'react'

import styles from './todoPage.module.scss'
import todoBg from '../../assets/todo/todo-bg.webp'
import AddTodo from '../../components/todo/addTodo/AddTodo.component'
import TodoList from '../../components/todo/todoList/TodoList.component'
import
VisibilityFilters
  from '../../components/todo/visibilityFilters/VisibilityFilters.component'

const TodoPage = () => {
  return (
    <section className={styles.todoPage}>
      <div className={styles.background}>
        <img src={todoBg} alt="background"/>
      </div>

      <div className={styles.aside}>Aside</div>
      <div className={styles.content}>
        <section className={styles.tasksContainer}>
          <div className={styles.todoSection}>
            <TodoList />
            <AddTodo />
            <VisibilityFilters />
          </div>
        </section>
      </div>
    </section>
  )
}

export default TodoPage
