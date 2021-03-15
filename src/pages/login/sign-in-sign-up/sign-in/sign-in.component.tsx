import React from 'react'
import './sign-in.styles.scss'
import {TextField, Button} from '@material-ui/core'
import {signInWithGoogle} from '../../../../firebase/firebase.config'

export const SingIn: React.FC = () => {
  return (
    <div className="sign-in">
      <h2 className="sign-in--title">Sign in</h2>
      <form action="submit" className="sign-in__form">
        <div className="sign-in__form--inputs">
          <TextField
            label="Email"
            fullWidth
            required
          />

          <TextField
            label="Password"
            type="Password"
            fullWidth
            required
          />
        </div>

        <Button
          className="sign-in__form--btn-submit"
          variant="contained"
          color="primary"
        >
          Primary
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
