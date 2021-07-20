/* eslint-disable max-len */
import React from 'react'
import { Menu, Dropdown } from 'antd';
import cn from 'classnames'

import styles from './sortItems.module.scss'
import {ReactComponent as SortIcon} from '../../../assets/todo/icons/sort.svg'
import { IFnSortTodos } from '../../../Interfaces/interfaces';
import { sortMenu } from '../../../Utils/SortedItems';

interface Props {
  checkedSort: string,
  handleSortChange: IFnSortTodos,
}

const SortedItems: React.FC<Props> = (props) => {
  return (
    <>
      <Dropdown
        overlay={
          <Menu className={styles.sortList}>
            {
              sortMenu.map((item, idx) => {
                return (
                  <Menu.Item
                    className={cn(styles.sortItem,
                    props.checkedSort === item.sort ? styles.sortItemActive : '')}
                    onClick={() => props.handleSortChange(item.sort)}
                    key={idx}>
                    {item.icon} {item.text}
                  </Menu.Item>
                )
              })
            }
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

export default SortedItems
