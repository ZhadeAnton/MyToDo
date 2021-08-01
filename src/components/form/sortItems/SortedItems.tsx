/* eslint-disable max-len */
import React from 'react'
import { Menu, Dropdown } from 'antd';
import { v4 } from 'uuid';
import cn from 'classnames'

import styles from './sortItems.module.scss'
import {ReactComponent as SortIcon} from '../../../assets/todo/icons/sort.svg'
import { IFnSortTodos } from '../../../Interfaces/TodoInterfaces';
import { sortMenu } from '../../../Utils/SortedItems';
import { addNotification } from '../../../Redux/General/GeneralActionCreators';
import { useAppDispatch } from '../../../Hooks/usePreTypedHooks';

interface Props {
  checkedSort: string,
  handleSortChange: IFnSortTodos,
}

const SortedItems: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()

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
                    onClick={() => {
                      props.handleSortChange(item.sort)
                      dispatch(addNotification('SUCCESS', `Sorted by ${item.sort}`, v4()))
                    }}
                    key={idx}
                  >
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
