import React from 'react'
import './sign-up.styles.scss'
import {TextField, Button} from '@material-ui/core'

export const SignUp: React.FC = () => {
  return (
    <div className="sign-up">
      <h2 className="sign-up--title">Sign Up</h2>
      <form action="submit" className="sign-up__form">
        <div className="sign-up__form--inputs">
          <TextField
            id="standard-basic"
            label="Email"
            fullWidth
            required
          />

          <TextField
            id="standard-basic"
            label="Password"
            type="Password"
            fullWidth
            required
          />

          <TextField
            id="standard-basic"
            label="Confirm Password"
            type="text"
            fullWidth
            required
          />
        </div>

        <Button
          className="sign-up__form--btn-submit"
          variant="contained"
          color="primary"
        >
          Create Account
        </Button>
      </form>
    </div>
  )
}
