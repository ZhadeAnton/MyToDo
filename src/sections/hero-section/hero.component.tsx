import React from 'react'

import classNames from 'classnames'
import styles from './hero.module.scss'
import CustomButton from '../../components/customButton/CustonButton.component'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={classNames(styles.wrapper, 'container')}>
        <div className={styles.textBlock}>

          <h1 className={styles.title}>
            A to-do lost you&#39;d actually use
          </h1>

          <p className={styles.text}>
            With award winning design and powerful features, Any.do is the
            to-do list you would actually stick to. Designed to help you
            get organized, achieve your goals and never forget a thing.
          </p>

          <CustomButton>
            Get Started
          </CustomButton>
        </div>

        <div className={styles.phoneBlock}>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
