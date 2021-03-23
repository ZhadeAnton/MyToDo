import React from 'react';

import styles from './login.module.scss'
import TabsLogin from './login-tabs/login-tabs.component';

const LoginPage: React.FC = () => {
  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h1>Never forget a thing</h1>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.rightSide}>
          <TabsLogin />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
