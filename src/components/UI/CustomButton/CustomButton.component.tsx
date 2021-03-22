import React from 'react'
import {Button} from '@material-ui/core'

interface Props {
  children?: React.ReactNode,
  type?: boolean,
  variant?: string,
  color?: string,
  onClick?: () => void
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default CustomButton
