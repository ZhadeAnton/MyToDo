import React from 'react'

import styles from './todoPage.module.scss'
import todoBg from '../../assets/todo/todo-bg.webp'

const TodoPage = () => {
  return (
    <section className={styles.todoPage}>
      <div className={styles.background}>
        <img src={todoBg} alt="background"/>
      </div>

      <div className={styles.aside}>Aside</div>
      <div className={styles.content}>
        <section className={styles.tasksContainer}>
          <div className={styles.todoSection}>new todo</div>
          <div className={styles.dataSection}></div>
        </section>
      </div>
    </section>
  )
}

export default TodoPage
