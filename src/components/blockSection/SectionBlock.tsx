import React from 'react'
import cn from 'classnames'

import styles from './sectionBlock.module.scss'
import list from '../../assets/blockImage.png'

const BlockSection = () => {
  return (
    <section className={styles.blockSection}>
      <div className={cn(styles.wrapper, 'container')}>
        <div className={styles.blockImg}>
          <img src={list} alt=""/>
        </div>

        <div className={styles.textBlock}>
          <h4>
            organize
          </h4>

          <h2>
            Run your life like a pro
          </h2>

          <p>
          Organize all your to-do’s in lists and projects.
          Color tag them to set priorities and categories.
          Boost your productivity with notes, subtasks and attachments.
          Get more done with shared lists and assigned tasks.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlockSection
