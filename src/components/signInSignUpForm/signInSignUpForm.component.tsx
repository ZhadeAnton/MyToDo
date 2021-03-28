import React from 'react'
import {Tabs, Spin} from 'antd';

import styles from './signInSignUpForm.module.scss'
import SingIn from '../signIn/SignIn.component';
import SingUp from '../signUp/SignUp.component';

interface Props {
  isLoading: boolean,
  signInWithEmail: (email: string, password: string) => void,
  signUp: () => void,
  signUpFailure: () => void,
}

const SignInSignUpForm: React.FC<Props> = ({
  isLoading,
  signInWithEmail,
  signUp,
  signUpFailure
}) => {
  const {TabPane} = Tabs;

  return (
    <div className={styles.loginForm}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sign In" key="1">
          <Spin spinning={isLoading}>
            <SingIn
              signInWithEmail={signInWithEmail}
            />
          </Spin>
        </TabPane>
        <TabPane tab="Sign Up" key="2">
          <Spin spinning={isLoading}>
            <SingUp
              signUp={signUp}
              signUpFailure={signUpFailure}
            />
          </Spin>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SignInSignUpForm
