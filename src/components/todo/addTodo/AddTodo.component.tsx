import React, {useState} from 'react'
import {Input, Button} from 'antd';

import styles from './addTodo.module.scss'

interface Props {
  addTodo: (title: string) => void
}

const AddTodo = (props: Props) => {
  const [value, setValue] = useState('')

  const updateInput = (input: string) => {
    setValue(input)
  }

  const handleAddTodo = () => {
    props.addTodo(value)
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

export default AddTodo
