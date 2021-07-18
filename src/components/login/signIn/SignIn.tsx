import React from 'react'

import styles from './signIn.module.scss'
import { LoginPageProps } from '../../../containers/LoginPageContainer';
import SignInForm from '../../form/signInForm/SignInForm';

interface Props {
  signInWithEmail: LoginPageProps['signInWithEmail'],
}

const SingIn: React.FC<Props> = (props) => {
  return (
    <div className={styles.signIn}>
      <h2>Sign in with email</h2>

      <SignInForm
        signInWithEmail={props.signInWithEmail}
      />
    </div>
  )
}

export default SingIn
