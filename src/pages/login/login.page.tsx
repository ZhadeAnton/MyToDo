import React from 'react';
import
SignInSignUpForm
  from '../../components/signInSignUpForm/signInSignUpForm.component';

import styles from './login.module.scss'

const LoginPage: React.FC = () => {
  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h1>Never forget a thing</h1>
        </div>

        <div className={styles.form}>
          <SignInSignUpForm />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
