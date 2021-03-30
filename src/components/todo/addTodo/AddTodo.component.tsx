import React, {useState} from 'react'
import {Input, Button} from 'antd';
import {connect} from 'react-redux'
import {Dispatch} from 'redux';

import styles from './addTodo.module.scss'
import {addTodo} from '../../../redux/todo/todoActionCreators';

interface Props {
  addTodo: (title: string) => void
}

const AddTodo: React.FC<Props> = ({addTodo}) => {
  const [value, setValue] = useState('')

  const updateInput = (input: string) => {
    setValue(input)
  }

  const handleAddTodo = () => {
    addTodo(value)
    setValue('')
  }

  return (
    <div className={styles.addTodo}>
      <Input
        onChange={(e) => updateInput(e.target.value)}
        value={value}
      />
      <Button
        type="primary"
        onClick={handleAddTodo}
      >
        Add Todo
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (title: string) => dispatch(addTodo(title))
})

export default connect(null, mapDispatchToProps)(AddTodo)
