import React, { useEffect } from 'react';
import { message } from 'antd';

import styles from './loginPage.module.scss'
import { LoginPageProps } from '../../containers/LoginPageContainer';
import LoginTabs from '../../components/login/loginTabs/LoginTabs';
import { Redirect } from 'react-router-dom';

const LoginPage: React.FC<LoginPageProps> = (props) => {
  useEffect(() => {
    if (props.userError) {
      message.error(props.userError)
    }
  }, [props.userError])

  if (props.user) return <Redirect to="/" />

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm}>
        <LoginTabs
          isLoading={props.isLoading}
          signUp={props.signUp}
          signInWithEmail={props.signInWithEmail}
          signInWithGoogle={props.signInWithGoogle}
          signInWithFacebook={props.signInWithFacebook}
        />
      </div>
    </section>
  )
}

export default LoginPage
