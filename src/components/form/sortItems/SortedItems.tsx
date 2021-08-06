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

export default function SortingDropdown(props: Props) {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.sortingDropdown}>
      <h6 className={styles.sortingName}>
        Sorted by { props.checkedSort }
      </h6>
      <Dropdown
        overlay={
          <Menu className={styles.sortList}
            style={{
              border: 1 + 'px solid #c0c0c0fd',
              boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
            }}
          >
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
                    <div className={styles.sortItemWrapper}>
                      {item.icon} {item.text}
                    </div>
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
    </div>
  )
}
