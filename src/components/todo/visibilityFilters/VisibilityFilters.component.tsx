import React from 'react'
import cx from 'classnames'

import styles from './visibilityFilters.module.scss'
import {VISIBILITY_FILTERS} from '../../../redux/todo/todoConstants'
interface Props {
  activeFilter: string,
  setFilter: (filter: string) => void,
}

const VisibilityFilters = (props: Props) => {
  return (
    <div>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey: string) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`${currentFilter}`}
            onClick={() => {
              props.setFilter(currentFilter);
            }}
            className={cx(
                styles.filter,
                currentFilter === props.activeFilter && styles.filterActive
            )}
          >
            {currentFilter}
          </span>
        )
      })
      }
    </div>
  )
}

export default VisibilityFilters
