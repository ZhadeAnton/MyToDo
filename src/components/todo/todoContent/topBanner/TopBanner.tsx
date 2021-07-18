import React from 'react'
import { ITodoList } from '../../../../interfaces'

import styles from './topBanner.module.scss'
import SortItems from '../../../form/sortItems/SortedItems'

interface Props {
  list: ITodoList | undefined,
  path: string,
  checkedSort: string,
  handleSortChange: (sort: string) => void
}

const TopBanner: React.FC<Props> = (props) => {
  return (
    <div className={styles.topBanner}>
      <h2>
        {props.list?.title || `${props.path.slice(6) === ''
        ? 'Todos' : props.path.slice(6)}`}
      </h2>

      <SortItems
        checkedSort={props.checkedSort}
        handleSortChange={props.handleSortChange}
      />
    </div>
  )
}

export default TopBanner
