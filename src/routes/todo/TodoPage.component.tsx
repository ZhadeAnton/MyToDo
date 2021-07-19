import React from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './todoPage.module.scss'
import { ITodoContainer } from '../../Containers/TodoPageContainer'

import TodoDrawer from '../../components/todo/todoDrawer/TodoDrawer.'
import TodoDetails from '../../components/todo/todoDetails/TodoDetails'
import TodoContent from '../../components/todo/todoContent/TodoContent'

const TodoPage = (props: ITodoContainer) => {
  return (
    <main className={styles.todoPage}>
      <aside className={styles.todoDrawer}>
        <TodoDrawer
          user={props.user}
          lists={props.lists}
          onCreateList={props.handleCreateList}
          onDeleteList={props.handleDeleteList}
          onSignOut={props.handleSignOut}
        />
      </aside>

      <section className={styles.todoContent}>
        <Switch>
          <Route
            path="/todo/:listid?"
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
          <TodoDetails
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
