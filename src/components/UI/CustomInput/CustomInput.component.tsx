import React from 'react'
import {TextField} from '@material-ui/core'

interface Props {
  name: string,
  label: string,
  value: string,
  type: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  fullWidth?: boolean,
  required?: boolean,
  autoFocus?: boolean
}

const CustomInput: React.FC<Props> = (props) => {
  return (
    <TextField
      name={props.name}
      label={props.label}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      fullWidth={props.fullWidth}
      required={props.required}
      autoFocus={props.autoFocus}
      autoComplete="true"
    />
  )
}

export default CustomInput
