/* eslint-disable max-len */
import React from 'react'
import { Menu, Dropdown } from 'antd';
import cn from 'classnames'

import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  FontSizeOutlined,
  StarOutlined } from '@ant-design/icons';

import styles from './sortItems.module.scss'
import {ReactComponent as SortIcon} from '../../../assets/todo/icons/sort.svg'
import { IFnSortTodos } from '../../../Interfaces/interfaces';

interface Props {
  checkedSort: string,
  handleSortChange: IFnSortTodos,
}

const SortItems: React.FC<Props> = (props) => {
  const sortMenu = [
    { sort: 'date', icon: <ClockCircleOutlined />, text: 'By date' },
    { sort: 'title', icon: <FontSizeOutlined />, text: 'By name' },
    { sort: 'important', icon: <StarOutlined />, text: 'By important' },
    { sort: 'completed', icon: <CheckCircleOutlined />, text: 'By completed' },
    { sort: 'unCompleted', icon: <CloseCircleOutlined />, text: 'By uncompleted' },
  ]

  return (
    <>
      <Dropdown
        overlay={
          <Menu className={styles.sortList}>{sortMenu.map((item, idx) => {
            return (
              <Menu.Item
                className={cn(styles.sortItem,
                    props.checkedSort === item.sort ? styles.sortItemActive : '')}
                onClick={() => props.handleSortChange(item.sort)}
                key={idx}>
                {item.icon} {item.text}
              </Menu.Item>
            )
          })}
          </Menu>
        }
        trigger={['click']}
        placement="bottomRight"
        arrow>
        <SortIcon />
      </Dropdown>
    </>
  )
}

export default SortItems
