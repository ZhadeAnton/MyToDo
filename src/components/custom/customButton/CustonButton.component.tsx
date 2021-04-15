import React from 'react'
import {Button} from 'antd';

interface Props {
  children: string,
  onClick?: () => void
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <Button
      type="primary"
      size="large"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default CustomButton
