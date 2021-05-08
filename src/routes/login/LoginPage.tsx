import React from 'react';

import styles from './loginPage.module.scss'
import { LoginPageProps } from '../../containers/LoginPageContainer';
import LoginTabs from '../../components/login/loginTabs/LoginTabs';


const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>

        <div className={styles.form}>
          <LoginTabs
            isLoading={props.isLoading}
            signInWithEmail={props.signInWithEmail}
            signUp={props.signUp}
          />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
