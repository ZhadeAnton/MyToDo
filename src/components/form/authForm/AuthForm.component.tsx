import React from 'react'
import {Tabs, Spin} from 'antd';

import styles from './authForm.module.scss'
import SingIn from '../signIn/SignIn.component';
import SingUp from '../signUp/SignUp.component';
import {AuthFormProps} from '../../../containers/AuthFormContainer.container';

const AuthForm: React.FC<AuthFormProps> = ({
  isLoading,
  signInWithEmail,
  signUp,
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
            />
          </Spin>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AuthForm
