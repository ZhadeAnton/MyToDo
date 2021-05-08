import React from 'react'
import {Row, Col} from 'antd'

import styles from './sectionAvailable.module.scss'
import {ReactComponent as IPhone} from '../../assets/available/iPhone.svg'
import {ReactComponent as Android} from '../../assets/available/android.svg'
import {ReactComponent as IPad} from '../../assets/available/iPad.svg'
import {ReactComponent as Mac} from '../../assets/available/Mac.svg'
import {ReactComponent as Web} from '../../assets/available/web.svg'
import {ReactComponent as Siri} from '../../assets/available/siri.svg'
import {ReactComponent as Alexa} from '../../assets/available/alexa.svg'
import {ReactComponent as Google} from '../../assets/available/googleAsis.svg'
import {ReactComponent as Window} from '../../assets/available/window.svg'
import {ReactComponent as Chrome} from '../../assets/available/chrome.svg'
import {ReactComponent as Firefox} from '../../assets/available/firefox.svg'
import {ReactComponent as AppWatch} from '../../assets/available/appWatch.svg'
import {ReactComponent as Wear} from '../../assets/available/wear.svg'
import {ReactComponent as Huawei} from '../../assets/available/huawei.svg'
import {ReactComponent as Desktop} from '../../assets/available/desktop.svg'

const AvailableSection = () => {
  return (
    <section className={styles.available}>
      <Row>
        <Col span={24}>
          <h2 className={styles.availableTitle}>Available on:</h2>
        </Col>

        <Col span={24}>
          <ul className={styles.availableDevice}>
            <li><IPhone /><p>IPhone</p></li>
            <li><Android /><p>Android</p></li>
            <li><IPad /><p>IPad</p></li>
            <li><Mac /><p>Mac</p></li>
            <li><Web /><p>Web</p></li>
            <li><Siri /><p>Siri</p></li>
            <li><Alexa /><p>Amazon Alexa</p></li>
            <li><Google /><p>Google Assistent</p></li>
            <li><Window /><p>Window</p></li>
            <li><Chrome /><p>Chrome</p></li>
            <li><Firefox /><p>Firefox</p></li>
            <li><AppWatch /><p>AppWatch</p></li>
            <li><Wear /><p>Wear OS</p></li>
            <li><Huawei /><p>Huawei</p></li>
            <li><Desktop /><p>Desktop</p></li>
          </ul>
        </Col>
      </Row>
    </section>
  )
}

export default AvailableSection
