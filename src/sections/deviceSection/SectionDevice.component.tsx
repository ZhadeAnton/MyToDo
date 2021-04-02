import React from 'react'
import {Row, Col} from 'antd';

import styles from './sectionDevice.module.scss'

const DeviceSection = () => {
  return (
    <section className={styles.device}>
      <Row>
        <Col span={24}>
          <div className={styles.description}>
            <h2 className={styles.title}>
              Organize anything with anyone, anywhere.
            </h2>

            <p className={styles.text}>
              Wherever you are, take your to do list with you.
              Access Any.do on mobile, laptop, tablet and even your watch!
              Your tasks are always in-sync across all your devices so
              you’re always in control.
            </p>
          </div>
          <div className={styles.deviceImage}></div>
        </Col>
      </Row>
    </section>
  )
}

export default DeviceSection
