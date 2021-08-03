import React from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import { ITodoContainer } from '../../Containers/TodoPageContainer'

// import TodoDetails from '../../components/todo/todoDetails/TodoDetails'
import TodoContent from '../../components/todo/todoContent/TodoContent'
import TodoDrawerMini from '../../components/todo/TodoDrawerMini/TodoDrawerMini'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.'
import TodoDetailsMini from '../../components/todo/TodoDetailsMini/TodoDetailsMini'
import TodoDetails from '../../components/todo/todoDetails/TodoDetails'

const TodoPage = (props: ITodoContainer) => {
  const windowDimentions = useWindowDimensions()

  return (
    <main className={styles.todoPage}>
      <div className={styles.todoDrawer}>
        {
          windowDimentions.width > 768
          ?
            <TodoDrawer
              userId={props.userId}
              lists={props.lists}
              onCreateList={props.handleCreateList}
              onDeleteList={props.handleDeleteList}
            />
          :
            <TodoDrawerMini
              userId={props.userId}
              lists={props.lists}
              onCreateList={props.handleCreateList}
              onDeleteList={props.handleDeleteList}
            />
        }
      </div>

      <section className={styles.todoContent}>
        <Switch>
          <Route
            path="/:listid?"
            render={() =>
              <TodoContent
                todos={props.filteredTodos}
                lists={props.lists}
                path={props.path}
                userId={props.userId}
                listId={props.listId}
                checkedSort={props.sortBy}
                selectedTodo={props.selectedTodo}
                currentList={props.currentList}
                onCreateTodo={props.handleCreateTodo}
                onDeleteTodo={props.handleDeleteTodo}
                onUpdateTodo={props.handleUpdateTodo}
                onSelectTodo={props.handleSelectTodo}
                onCloseSelectedTodo={props.handleCloseSelectedTodo}
                onSort={props.handleSort}
                onSubmit={props.handleSubmit}
              />
            }
          />
        </Switch>
      </section>

      <aside className={styles.todoDetails}>
        { props.selectedTodo &&
          windowDimentions.width > 992 &&
          <TodoDetails
            userId={props.userId}
            selectedTodo={props.selectedTodo}
            onAddTodoStep={props.handleAddTodoStep}
            onDeleteTodoStep={props.handleDeleteTodoStep}
            onUpdate={props.handleUpdateTodo}
            onDeleteTodo={props.handleDeleteTodo}
            onSelectTodo={props.handleSelectTodo}
            onChangeTitleSelectedTodo={props.handleChangeTodoTitle}
            onSetDateSelectedTodo={props.handleSetDateTodo}
            onRemoveDateSelectedTodo={props.handleRemoveDateTodo}
            onCloseSelectedTodo={props.handleCloseSelectedTodo}
          />
        }
        {
          props.selectedTodo &&
           windowDimentions.width < 992 &&
           <TodoDetailsMini
             userId={props.userId}
             selectedTodo={props.selectedTodo}
             onAddTodoStep={props.handleAddTodoStep}
             onDeleteTodoStep={props.handleDeleteTodoStep}
             onUpdate={props.handleUpdateTodo}
             onDeleteTodo={props.handleDeleteTodo}
             onSelectTodo={props.handleSelectTodo}
             onChangeTitleSelectedTodo={props.handleChangeTodoTitle}
             onSetDateSelectedTodo={props.handleSetDateTodo}
             onRemoveDateSelectedTodo={props.handleRemoveDateTodo}
             onCloseSelectedTodo={props.handleCloseSelectedTodo}
           />
        }
      </aside>
    </main>
  )
}

export default TodoPage
