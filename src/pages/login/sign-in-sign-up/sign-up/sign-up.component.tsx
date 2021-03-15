import React from 'react'
import './sign-up.styles.scss'
import {TextField, Button} from '@material-ui/core'

export const SignUp: React.FC = () => {
  // const [userData, setUserData] = useState({
  //   displayName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // })

  // const {displayName, email, password, confirmPassword} = userData

  // const handleChange = (event) => {
  //   const {name, value} = event.target

  //   setUserData({...userData, [name]: value})
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()

  //   if(password !== confirmPassword) {
  //     alert('Password do not match')
  //   }


  // }

  return (
    <div className="sign-up">
      <h2 className="sign-up--title">Sign Up</h2>
      <form className="sign-up__form">
        <div className="sign-up__form--inputs">
          <TextField
            type='text'
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

          <TextField
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
