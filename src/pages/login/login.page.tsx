import React from 'react';
import
SignInSignUpFormContainer
  from '../../components/signInSignUpForm/SignInSignUpForm.contaier';

import styles from './login.module.scss'

const LoginPage: React.FC = () => {
  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h1>Never forget a thing</h1>
        </div>

        <div className={styles.form}>
          <SignInSignUpFormContainer />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
