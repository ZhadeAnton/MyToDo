import React from 'react'
import { Button, Divider } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

import styles from './altSignIn.module.scss'
import {GooglePlusOutlined, FacebookOutlined} from '@ant-design/icons';
import {
  IFnSignInWithFacebook,
  IFnSignInWithGoogle } from '../../../Interfaces/UserInterfaces';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

interface Props {
  isLoading: boolean,
  signInWithGoogle: IFnSignInWithGoogle,
  signInWithFacebook: IFnSignInWithFacebook
}

const AltSignIn: React.FC<Props> = (props) => {
  const dimension = useWindowDimensions()
  const buttonSize: SizeType = dimension.width < 992 ? 'middle' : 'large'

  return (
    <div className={styles.altSignIn}>
      <Divider plain>
        or
      </Divider>

      <div className={styles.buttonsGroup}>
        <Button
          loading={props.isLoading}
          type="primary"
          size={buttonSize}
          icon={<GooglePlusOutlined />}
          onClick={() => props.signInWithGoogle()}
          style={{
            backgroundColor: '#DD4B39',
            marginBottom: 1 + 'rem'
          }}
        >
            Sign in with Google
        </Button>

        <Button
          loading={props.isLoading}
          style={{backgroundColor: '#5890FF'}}
          type="primary"
          size={buttonSize}
          icon={<FacebookOutlined />}
          onClick={() => props.signInWithFacebook()}
        >
            Sign in with Facebook
        </Button>
      </div>
    </div>
  )
}

export default AltSignIn
