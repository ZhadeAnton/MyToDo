import React from 'react'
import {Button} from 'antd';

import styles from './alternative.module.scss'
import {GooglePlusOutlined, FacebookOutlined} from '@ant-design/icons';

type Props = {
  isLoading: boolean,
  signInWithGoogle: () => void,
  signInWithFacebook: () => void
}

const AlternativeSignIn: React.FC<Props> =
({signInWithGoogle, signInWithFacebook, isLoading}) => {
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
          loading={isLoading}
          type="primary"
          size="large"
          icon={<GooglePlusOutlined />}
          onClick={() => signInWithGoogle()}>
          Google
        </Button>

        <Button
          loading={isLoading}
          type="primary"
          size="large"
          icon={<FacebookOutlined />}
          onClick={() => signInWithFacebook()}>
          Facebook
        </Button>
      </div>
    </div>
  )
}

export default AlternativeSignIn
