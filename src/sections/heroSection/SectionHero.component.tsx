import React from 'react'
import {Row, Col} from 'antd';
import cn from 'classnames'

import styles from './sectionHero.module.scss'
import phone from '../../assets/phone.jpg'
import CustomButton
  from '../../components/custom/customButton/CustonButton.component'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Row className={cn(styles.wrapper, 'container')}>
        <Col span={12} className={styles.textBlock}>
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
        </Col>

        <Col span={12} className={styles.phoneBlock}>
          <img src={phone} alt=""/>
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection
