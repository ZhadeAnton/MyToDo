import React from 'react'

import styles from './signIn.module.scss'
import { IFnSignInWithEmail } from '../../../Interfaces/UserInterfaces';

import SignInForm from '../../form/signInForm/SignInForm';

interface Props {
  signInWithEmail: IFnSignInWithEmail,
}

const SingIn: React.FC<Props> = (props) => {
  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>
        Sign in with email
      </h2>

      <SignInForm
        signInWithEmail={props.signInWithEmail}
      />
    </div>
  )
}

export default SingIn
