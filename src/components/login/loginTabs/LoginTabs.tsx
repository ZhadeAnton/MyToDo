import React from 'react'
import {Tabs, Spin} from 'antd';
const {TabPane} = Tabs;

import styles from './loginTabs.module.scss'
import SingIn from '../signIn/SignIn';
import SingUp from '../signUp/SignUp';
import { LoginPageProps } from '../../../containers/LoginPageContainer';
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import AltSignIn from '../altSignIn/AltSignIn';

interface Props {
  isLoading: LoginPageProps['isLoading'],
  signInWithEmail: LoginPageProps['signInWithEmail'],
  signInWithGoogle: LoginPageProps['signInWithGoogle'],
  signInWithFacebook: LoginPageProps['signInWithFacebook'],
  signUp: LoginPageProps['signUp']
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
              signInWithEmail={props.signInWithEmail}
            />
            <AltSignIn
              isLoading={props.isLoading}
              signInWithFacebook={props.signInWithFacebook}
              signInWithGoogle={props.signInWithGoogle}
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
              signUp={props.signUp}
            />
          </Spin>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default LoginTabs
