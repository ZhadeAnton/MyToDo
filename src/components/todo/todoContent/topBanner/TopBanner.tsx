import React from 'react'
import { IFnSortTodos, ITodoList } from '../../../../Interfaces/interfaces'

import styles from './topBanner.module.scss'
import SortedItems from '../../../form/sortItems/SortedItems'

interface Props {
  list: ITodoList | undefined,
  path: string,
  checkedSort: string,
  onSort: IFnSortTodos
}

const TopBanner: React.FC<Props> = (props) => {
  return (
    <div className={styles.topBanner}>
      <h2>
        {props.list?.title || `${props.path.slice(1)}`}
      </h2>

      <SortedItems
        checkedSort={props.checkedSort}
        handleSortChange={props.onSort}
      />
    </div>
  )
}

export default TopBanner
