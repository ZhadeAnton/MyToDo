import React from 'react'
import { List } from 'antd';

import styles from './filterList.module.scss'
import FilterItem from '../filterItem/FilterItem'
import { drawerFilterItems } from '../../../../Utils/FilterListUtils';

const FilterList = () => {
  return (
    <List
      className={styles.filterList}
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
