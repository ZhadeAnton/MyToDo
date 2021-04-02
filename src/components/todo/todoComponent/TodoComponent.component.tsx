import React from 'react'

import TodoList from '../todoList/TodoList.component';
import AddTodo from '../addTodo/AddTodo.component';
import
VisibilityFilters from '../visibilityFilters/VisibilityFilters.component';
import {TodoProps} from './TodoComponent.container';

const TodoComponent: React.FC<TodoProps> = (props) => {
  return (
    <div>
      <TodoList
        todos={props.todos}
        toggleTodo={props.toggleTodo}
        deleteTodo={props.deleteTodo}
      />
      <AddTodo
        addTodo={props.addTodo}
      />
      <VisibilityFilters
        activeFilter={props.activeFilter}
        setFilter={props.setFilter}
      />
    </div>
  )
}

export default TodoComponent
