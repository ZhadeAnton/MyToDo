import React from 'react'

import CustomLink from '../../../custom/customLink/CustomLink'

interface Props {
  item: {
    title: string,
    icon: React.SVGProps<SVGSVGElement>,
    to: string
  }
}

const TodoDrawerFilterItem: React.FC<Props> = (props) => {
  return (
    <li key={props.item.to}>
      <i>{props.item.icon}</i>
      <CustomLink to={props.item.to}>{props.item.title}</CustomLink>
    </li>
  )
}

export default TodoDrawerFilterItem
