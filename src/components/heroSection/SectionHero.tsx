import React from 'react'
import { Button } from 'antd'
import cn from 'classnames'

import styles from './sectionHero.module.scss'
import phone from '../../assets/phone.jpg'


const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={cn(styles.wrapper, 'container')}>
        <div className={styles.infoBlock}>
          <h1>
            A to-do list you&#39;d actually use
          </h1>

          <p>
            With award winning design and powerful features, Any.do is the
            to-do list you would actually stick to. Designed to help you
            get organized, achieve your goals and never forget a thing.
          </p>

          <Button type='primary' size='large'>
            Get Started - it`s Free!
          </Button>
        </div>

        <div className={styles.imageBlock}>
          <img src={phone} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
