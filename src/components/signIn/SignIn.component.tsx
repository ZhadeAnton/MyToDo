import React, {useState} from 'react'
import './SignIn.styles.scss'

import {TextField, Button} from '@material-ui/core'

interface Props {
  signInWithEmail(email: string, password: string): void,
  signInWithGoogle(): void
}

const SingIn: React.FC<Props> = ({signInWithEmail, signInWithGoogle}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    signInWithEmail(email, password)

    setUserData({
      email: '',
      password: ''
    })
  }

  return (
    <div className="sign-in">
      <h2 className="sign-in--title">Sign in</h2>
      <form className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__form--inputs">
          <TextField
            name="email"
            label="Email"
            fullWidth
            required
            autoFocus
            autoComplete="true"
            onChange={handleChange}
            value={email}
          />

          <TextField
            name="password"
            label="Password"
            type="Password"
            fullWidth
            required
            autoComplete="true"
            onChange={handleChange}
            value={password}
          />
        </div>

        <Button
          className="sign-in__form--btn-submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          Log in
        </Button>

        <div className="sign-in__form__separator">
          <span className="sign-in__form__separator--line"></span>
          <p>or</p>
          <span className="sign-in__form__separator--line"></span>
        </div>

        <div className="sign-in__form--btn-wrapper">
          <Button
            variant="contained"
            color="primary"
            onClick={() => signInWithGoogle()}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SingIn
