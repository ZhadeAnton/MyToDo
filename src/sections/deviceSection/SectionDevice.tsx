import React from 'react'

import styles from './sectionDevice.module.scss'

const DeviceSection = () => {
  return (
    <section className={styles.device}>
      <>
        <div>
          <div className={styles.description}>
            <h2>
              Organize anything with anyone, anywhere.
            </h2>

            <p>
              Wherever you are, take your to do list with you.
              Access Any.do on mobile, laptop, tablet and even your watch!
              Your tasks are always in-sync across all your devices so
              you’re always in control.
            </p>
          </div>

          <div className={styles.deviceImage}></div>
        </div>
      </>
    </section>
  )
}

export default DeviceSection
