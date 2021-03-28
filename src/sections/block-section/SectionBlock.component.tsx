import React from 'react'
import {Row, Col} from 'antd';
import cn from 'classnames'

import styles from './sectionBlock.module.scss'
import list from '../../assets/blockImage.png'

const BlockSection = () => {
  return (
    <section className={styles.block}>
      <Row className={cn(styles.wrapper, 'container')}>
        <Col span={12} className={styles.listBlock}>
          <img src={list} alt=""/>
        </Col>

        <Col span={12} className={styles.textBlock}>
          <h4 className={styles.subTitle}>organize</h4>
          <h2 className={styles.title}>
            Run your life like a pro
          </h2>

          <p className={styles.text}>
          Organize all your to-do’s in lists and projects.
          Color tag them to set priorities and categories.
          Boost your productivity with notes, subtasks and attachments.
          Get more done with shared lists and assigned tasks.
          </p>
        </Col>
      </Row>
    </section>
  )
}

export default BlockSection
