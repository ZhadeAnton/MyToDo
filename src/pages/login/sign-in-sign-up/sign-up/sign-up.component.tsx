import React, {useState} from 'react'
import './sign-up.styles.scss'
import {TextField, Button} from '@material-ui/core'
import {
  auth,
  creacteUserProfileDocument,
} from '../../../../firebase/firebase.config'

export const SignUp: React.FC = () => {
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

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await creacteUserProfileDocument(user, {displayName})

      setUserData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error.message)
    }
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
