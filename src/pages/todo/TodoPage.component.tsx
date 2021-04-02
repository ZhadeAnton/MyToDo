import React from 'react'

import styles from './todoPage.module.scss'
import todoBg from '../../assets/todo/todo-bg.webp'
import TodoComponentContainer
  from '../../components/todo/todoComponent/TodoComponent.container'

const TodoPage: React.FC = () => {
  return (
    <section className={styles.todoPage}>
      <div className={styles.background}>
        <img src={todoBg} alt="background"/>
      </div>

      <div className={styles.aside}>Aside</div>
      <div className={styles.content}>
        <section className={styles.tasksContainer}>
          <div className={styles.todoSection}>
            <TodoComponentContainer />
          </div>
        </section>
      </div>
    </section>
  )
}

export default TodoPage
