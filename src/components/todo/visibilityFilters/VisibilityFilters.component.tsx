import React from 'react'
import cx from 'classnames'

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
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
              props.setFilter(currentFilter);
            }}
            className={cx(
                'filter',
                currentFilter === props.activeFilter && 'filter--active'
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
