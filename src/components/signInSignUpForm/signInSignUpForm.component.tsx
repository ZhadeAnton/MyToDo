import React from 'react'
import {Tabs} from 'antd';

import styles from './signInSignUpForm.module.scss'
import SignInContainer from '../signIn/SignIn.container';
import SignUpContainer from '../signUp/SignUp.container';

const SignInSignUpForm = () => {
  const {TabPane} = Tabs;

  return (
    <div className={styles.loginForm}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sign In" key="1">
          <SignInContainer />
        </TabPane>
        <TabPane tab="Sign Up" key="2">
          <SignUpContainer />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SignInSignUpForm
