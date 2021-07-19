import React, { useEffect } from 'react';
import { message } from 'antd';

import styles from './loginPage.module.scss'
import { LoginPageProps } from '../../Containers/LoginPageContainer';
import LoginTabs from '../../components/login/loginTabs/LoginTabs';
import HomeLink from '../../components/custom/homeLink/HomeLink';

const LoginPage: React.FC<LoginPageProps> = (props) => {
  useEffect(() => {
    if (props.userError) {
      message.error(props.userError)
    }
  }, [props.userError])

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm}>
        <div className={styles.homeLink}>
          <HomeLink />
        </div>

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
