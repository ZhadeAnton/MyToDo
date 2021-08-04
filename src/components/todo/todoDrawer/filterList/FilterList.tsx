import React from 'react'
import { List } from 'antd';

import FilterItem from '../FilterItem/FilterItem'
import { drawerFilterItems } from '../../../../Utils/FilterListUtils';

const FilterList = () => {
  return (
    <List
      dataSource={drawerFilterItems}
      renderItem={(item) => (
        <FilterItem
          key={item.title}
          item={item}
        />
      )}
    />
  )
}
export default FilterList
