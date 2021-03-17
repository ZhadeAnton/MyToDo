import React, {useState} from 'react'
import './sign-in.styles.scss'
import {TextField, Button} from '@material-ui/core'
import {auth, signInWithGoogle} from '../../../../firebase/firebase.config'

export const SingIn: React.FC = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUserData({...userData, [name]: value})
  }

  const handleSubmit =
  async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)

      setUserData({
        email: '',
        password: '',
      })
    } catch (error) {
      console.error(error.message)
    }
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
