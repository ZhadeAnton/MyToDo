import React from 'react'
import { Button, Divider } from 'antd';

import styles from './altSignIn.module.scss'
import {GooglePlusOutlined, FacebookOutlined} from '@ant-design/icons';
import {
  IFnSignInWithFacebook,
  IFnSignInWithGoogle } from '../../../Interfaces/UserInterfaces';

interface Props {
  isLoading: boolean,
  signInWithGoogle: IFnSignInWithGoogle,
  signInWithFacebook: IFnSignInWithFacebook
}

const AltSignIn: React.FC<Props> = (props) => {
  return (
    <div className={styles.altSignIn}>
      <Divider plain>or</Divider>

      <div className={styles.buttonsGroup}>
        <Button
          style={{backgroundColor: '#DD4B39'}}
          loading={props.isLoading}
          type="primary"
          size="large"
          icon={<GooglePlusOutlined />}
          onClick={() => props.signInWithGoogle()}>
          Sign in with Google
        </Button>

        <Button
          loading={props.isLoading}
          style={{backgroundColor: '#5890FF'}}
          type="primary"
          size="large"
          icon={<FacebookOutlined />}
          onClick={() => props.signInWithFacebook()}>
          Sign in with Facebook
        </Button>
      </div>
    </div>
  )
}

export default AltSignIn
