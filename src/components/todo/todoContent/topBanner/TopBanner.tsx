import React from 'react'
import { IFnSortTodos, ITodoList } from '../../../../Interfaces/TodoInterfaces'

import styles from './topBanner.module.scss'
import SortingDropdown from '../../../form/sortItems/SortedItems'
import BannerName from '../../../custom/BannerName/BannerName'

interface Props {
  list: ITodoList | undefined,
  path: string,
  checkedSort: string,
  onSort: IFnSortTodos
}

const TopBanner: React.FC<Props> = (props) => {
  return (
    <div className={styles.topBanner}>
      <BannerName
        listTitle={props.list?.title}
        path={props.path}
      />

      <SortingDropdown
        checkedSort={props.checkedSort}
        handleSortChange={props.onSort}
      />
    </div>
  )
}

export default TopBanner
