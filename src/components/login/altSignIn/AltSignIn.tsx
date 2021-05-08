import React from 'react'
import {Button} from 'antd';

import styles from './altSignIn.module.scss'
import {GooglePlusOutlined, FacebookOutlined} from '@ant-design/icons';
import { LoginPageProps } from '../../../containers/LoginPageContainer';

interface Props {
  isLoading: LoginPageProps['isLoading'],
  signInWithGoogle: LoginPageProps['signInWithGoogle'],
  signInWithFacebook: LoginPageProps['signInWithFacebook']
}

const AltSignIn: React.FC<Props> = (props) => {
  return (
    <div className={styles.alternativeSignIn}>
      <div className={styles.orSeparator}>
        <span className={styles.orSideLine}></span>
        <p>or</p>
        <span className={styles.orSideLine}></span>
      </div>

      <div className={styles.buttonsGroup}>
        <Button
          style={{background: 'red'}}
          loading={props.isLoading}
          type="primary"
          size="large"
          icon={<GooglePlusOutlined />}
          onClick={() => props.signInWithGoogle()}>
          Google
        </Button>

        <Button
          loading={props.isLoading}
          type="primary"
          size="large"
          icon={<FacebookOutlined />}
          onClick={() => props.signInWithFacebook()}>
          Facebook
        </Button>
      </div>
    </div>
  )
}

export default AltSignIn
