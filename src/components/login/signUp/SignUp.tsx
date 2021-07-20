import React from 'react'

import styles from './signUp.module.scss'
import { IFnSignUp } from '../../../Interfaces/UserInterfaces';

import SignUpForm from '../../form/signUpForm/SignUpForm';

interface Props {
  signUp: IFnSignUp
}

const SignUp: React.FC<Props> = (props) => {
  return (
    <div className={styles.signUp}>
      <h2>Create my free account!</h2>
      <SignUpForm
        signUp={props.signUp}
      />
    </div>
  )
}

export default SignUp
