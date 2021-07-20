import React from 'react';

import styles from './loginPage.module.scss'
import { ILoginContainer } from '../../Containers/LoginPageContainer';

import LoginTabs from '../../components/login/loginTabs/LoginTabs';
import HomeLink from '../../components/custom/homeLink/HomeLink';

const LoginPage = (props: ILoginContainer) => {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm}>
        <div className={styles.homeLink}>
          <HomeLink />
        </div>

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
