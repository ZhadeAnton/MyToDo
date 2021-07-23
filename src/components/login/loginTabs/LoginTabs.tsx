import React from 'react'
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import {Tabs, Spin} from 'antd';
const {TabPane} = Tabs;

import styles from './loginTabs.module.scss'
import * as interfaces from '../../../Interfaces/UserInterfaces'

import SingIn from '../signIn/SignIn';
import SingUp from '../signUp/SignUp';
import AltSignIn from '../altSignIn/AltSignIn';

interface Props {
  isLoading: boolean,
  onSignInWithEmail: interfaces.IFnSignInWithEmail,
  onSignInWithGoogle: interfaces.IFnSignInWithGoogle,
  onSignInWithFacebook: interfaces.IFnSignInWithFacebook,
  onSignUp: interfaces.IFnSignUp
}

const LoginTabs: React.FC<Props> = (props) => {
  return (
    <div className={styles.loginTabs}>
      <Tabs
        defaultActiveKey="1"
        size="large"
        centered={true}
      >
        <TabPane
          tab={
            <span className={styles.tab}>
              <LoginOutlined />
              Sign In
            </span>
          }
          key="1"
        >
          <Spin spinning={props.isLoading}>
            <SingIn
              signInWithEmail={props.onSignInWithEmail}
            />
            <AltSignIn
              isLoading={props.isLoading}
              signInWithFacebook={props.onSignInWithFacebook}
              signInWithGoogle={props.onSignInWithGoogle}
            />
          </Spin>
        </TabPane>

        <TabPane
          tab={
            <span className={styles.tab}>
              <UserAddOutlined />
              Sign Up
            </span>
          }
          key="2"
        >
          <Spin spinning={props.isLoading}>
            <SingUp
              signUp={props.onSignUp}
            />
          </Spin>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default LoginTabs
