import React from 'react'

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

const devices = [
  { name: 'IPhone', icon: <IPhone /> },
  { name: 'Android', icon: <Android /> },
  { name: 'IPad', icon: <IPad /> },
  { name: 'Mac', icon: <Mac /> },
  { name: 'Web', icon: <Web /> },
  { name: 'Siri', icon: <Siri /> },
  { name: 'Alexa', icon: <Alexa /> },
  { name: 'Google', icon: <Google /> },
  { name: 'Window', icon: <Window /> },
  { name: 'Chrome', icon: <Chrome /> },
  { name: 'Firefox', icon: <Firefox /> },
  { name: 'AppWatch', icon: <AppWatch /> },
  { name: 'Wear', icon: <Wear /> },
  { name: 'Huawei', icon: <Huawei /> },
  { name: 'Desktop', icon: <Desktop /> },
]

const AvailableSection = () => {
  return (
    <section className={styles.available}>
      <div>
        <h2>Available on:</h2>

        <ul className={styles.listDevices}>
          {
            devices.map((item, idx) => {
              return (
                <li
                  className={styles.listItem}
                  key={idx}
                >
                  <p>{item.name}</p>
                  <span>{item.icon}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default AvailableSection
