import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core'

import './SignUp.styles.scss'

interface Props {
  signUp(displayName: string, email: string, password: string): void
}

const SignUp: React.FC<Props> = ({signUp}) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {displayName, email, password, confirmPassword} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUserData({...userData, [name]: value})
  }

  const handleSubmit =
  async (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Password do not match')
    }

    signUp(displayName, email, password)

    setUserData({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="sign-up">
      <h2 className="sign-up--title">Sign Up</h2>
      <form className="sign-up__form" onSubmit={handleSubmit}>
        <div className="sign-up__form--inputs">
          <TextField
            label="Name"
            name="displayName"
            type='text'
            fullWidth
            required
            autoFocus
            autoComplete="true"
            value={displayName}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type='email'
            fullWidth
            required
            autoComplete="true"
            value={email}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="Password"
            fullWidth
            required
            autoComplete="true"
            value={password}
            onChange={handleChange}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            required
            autoComplete="true"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>

        <Button
          className="sign-up__form--btn-submit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Create Account
        </Button>
      </form>
    </div>
  )
}

export default SignUp
