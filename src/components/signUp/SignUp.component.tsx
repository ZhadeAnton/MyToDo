import React, {useState} from 'react'

import styles from './signUp.module.scss'
import CustomButton from '../UI/CustomButton/CustomButton.component'
import CustomInput from '../UI/CustomInput/CustomInput.component'
import CustomSnackbar from '../UI/CustomSnackbars/CustomSnackbar.component'

interface Props {
  error?: string | null | undefined,
  signUp(displayName: string, email: string, password: string): void
  signUpFailure(error: string): void,
}

const SignUp: React.FC<Props> =
({signUp, signUpFailure, error}) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [open, setOpen] = React.useState(false);

  const clear = () => {
    setUserData({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const {displayName, email, password, confirmPassword} = userData

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUserData({...userData, [name]: value})
  }

  const handleSubmit =
  async (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      signUpFailure('Password does not matches!')
      clear()
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

        <CustomButton onClick={handleClick}>
          Create Account
        </CustomButton>

        <CustomSnackbar
          handleClick={handleClick}
          handleClose={handleClose}
          open={open}
          message={error}
        />
      </form>
    </div>
  )
}

export default SignUp
