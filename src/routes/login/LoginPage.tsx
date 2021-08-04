import React from 'react';

import styles from './loginPage.module.scss'
import { ILoginContainer } from '../../containers/LoginPageContainer';

import LoginTabs from '../../components/login/loginTabs/LoginTabs';

const LoginPage = (props: ILoginContainer) => {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm}>
        <LoginTabs
          isLoading={props.isLoading}
          onSignUp={props.handleSignUp}
          onSignInWithEmail={props.handleSignInWithEmail}
          onSignInWithGoogle={props.handleSignInWithGoogle}
          onSignInWithFacebook={props.handleSignInWithFacebook}
        />
      </div>
    </section>
  )
}

export default LoginPage
