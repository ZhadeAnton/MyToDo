import React from 'react'
import {connect} from 'react-redux'

import {RootState} from '../../../redux/store'
import {ITodo} from '../../../redux/todo/todoInterfaces'
import {getTodosByVisibilityFilter} from '../../../redux/todo/todoSelectors'
import TodoItem from '../todoItem/TodoItem.component'

interface Props {
  todos: ITodo[]
}

const TodoList: React.FC<Props> = ({todos}) => {
  if (todos.length === 0) {
    return <p>No todos</p>
  }

  return (
    <ul>
      {todos.map((todo: ITodo) => {
        return (
          <li key={todo.id}>
            <TodoItem
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state: RootState) => ({
  todos: getTodosByVisibilityFilter(state, (state.visibilityFilter))
})

export default connect(mapStateToProps)(TodoList)
