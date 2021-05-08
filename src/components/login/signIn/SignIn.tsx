import React from 'react'

import styles from './signIn.module.scss'
import { LoginPageProps } from '../../../containers/LoginPageContainer';
import SignInForm from '../../form/signInForm/SignInForm';
import Logo from '../../custom/logo/logo';

interface Props {
  signInWithEmail: LoginPageProps['signInWithEmail'],
}

const SingIn: React.FC<Props> = (props) => {
  return (
    <div className={styles.signIn}>
      <Logo />

      <SignInForm
        signInWithEmail={props.signInWithEmail}
      />
    </div>
  )
}

export default SingIn
