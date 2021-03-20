import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import './sign-in.styles.scss'
import {TextField, Button} from '@material-ui/core'
import {UserTypes} from '../../../../redux/user/userActionTypes'

import {
  emailSignInStart,
  googleSignInStart
} from '../../../../redux/user/userActionCreators'

interface Props {
  emailSignInStart(email: string, password: string): void,
  googleSignInStart(): void
}

const SingIn: React.FC<Props> = ({emailSignInStart, googleSignInStart}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
    console.log(userData)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    emailSignInStart(email, password)

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
            onClick={() => googleSignInStart()}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps =
(dispatch: Dispatch<UserTypes>) => ({
  emailSignInStart: (email: string, password: string) =>
    dispatch<any>(emailSignInStart({email, password})),
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SingIn)
