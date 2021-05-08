import React from 'react'
import {Tabs, Spin} from 'antd';
const {TabPane} = Tabs;

import styles from './loginTabs.module.scss'
import SingIn from '../signIn/SignIn';
import SingUp from '../signUp/SignUp';
import { LoginPageProps } from '../../../containers/LoginPageContainer';

interface Props {
  isLoading: LoginPageProps['isLoading'],
  signInWithEmail: LoginPageProps['signInWithEmail'],
  signUp: LoginPageProps['signUp']
}

const LoginTabs: React.FC<Props> = (props) => {
  return (
    <div className={styles.loginForm}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sign In" key="1">
          <Spin spinning={props.isLoading}>
            <SingIn
              signInWithEmail={props.signInWithEmail}
            />
          </Spin>
        </TabPane>
        <TabPane tab="Sign Up" key="2">
          <Spin spinning={props.isLoading}>
            <SingUp
              signUp={props.signUp}
            />
          </Spin>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default LoginTabs
