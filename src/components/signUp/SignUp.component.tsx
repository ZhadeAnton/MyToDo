import React, {useState} from 'react'

import styles from './signUp.module.scss'
import CustomButton from '../UI/CustomButton/CustomButton.component'
import CustomInput from '../UI/CustomInput/CustomInput.component'

interface Props {
  signUp(displayName: string, email: string, password: string): void
  signUpFailure(error: string): void,
}

const SignUp: React.FC<Props> =
({signUp, signUpFailure}) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const clear = () => {
    setUserData({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const {displayName, email, password, confirmPassword} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUserData({...userData, [name]: value})
  }

  const handleSubmit =
  async (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      signUpFailure('Password does not matches!')
      return
    }

    signUp(displayName, email, password)
    clear()
  }

  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputsBlock}>
          <CustomInput
            label="Name"
            name="displayName"
            type='text'
            value={displayName}
            onChange={handleChange}
            fullWidth
            required
            autoFocus
          />

          <CustomInput
            label="Email"
            name="email"
            type='email'
            value={email}
            onChange={handleChange}
            fullWidth
            required
          />

          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            fullWidth
            required
          />

          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>

        <CustomButton>
          Create Account
        </CustomButton>
      </form>
    </div>
  )
}

export default SignUp
