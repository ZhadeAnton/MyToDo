import React from 'react'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import cx from 'classnames'

import {setFilter} from '../../../redux/todo/todoActionCreators'
import {VISIBILITY_FILTERS} from '../../../redux/todo/todoConstants'
import {RootState} from '../../../redux/store'

interface Props {
  activeFilter: string,
  setFilter: (filter: string) => void,
}

const VisibilityFilters: React.FC<Props> = ({activeFilter, setFilter}) => {
  return (
    <div>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey: string) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
              setFilter(currentFilter);
            }}
            className={cx(
                'filter',
                currentFilter === activeFilter && 'filter--active'
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

const mapStateToProps = (state: RootState) => {
  return {activeFilter: state.visibilityFilter};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: string) => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters)
