import React from 'react'
import { Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import styles from './customRemoveIcon.module.scss'

interface Props {
  className?: string,
  onClick: any,
  toolTip?: string,
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' |
  'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' |
  'rightTop' | 'rightBottom';
}

const RemoveIcon: React.FC<Props> = (props) => {
  return (
    <Tooltip
      placement={props.placement}
      title={props.toolTip}
    >
      <span
        className={styles.removeIcon}
        onClick={props.onClick}
      >
        <DeleteOutlined />
      </span>
    </Tooltip>
  )
}

export default RemoveIcon
