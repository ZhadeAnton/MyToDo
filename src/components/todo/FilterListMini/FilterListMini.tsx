import React from 'react'
import { List } from 'antd';

import styles from './filterListMini.module.scss'
import { drawerFilterItems } from '../../../Utils/FilterListUtils';
import FilterItemMini from '../FilterItemMini/FilterItemMini';

export default function FilterList() {
  return (
    <List
      className={styles.filterListMini}
      dataSource={drawerFilterItems}
      renderItem={(item) => (
        <FilterItemMini
          key={item.title}
          item={item}
        />
      )}
    />
  )
}
