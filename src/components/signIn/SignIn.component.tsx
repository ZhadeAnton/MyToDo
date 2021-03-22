import React, {useState} from 'react'

import styles from './signIn.module.scss'
import CustomButton from '../UI/CustomButton/CustomButton.component'
import CustomInput from '../UI/CustomInput/CustomInput.component'
import AlternativeSignIn from '../alternativeSignIn/AlternativeSignIn.container'

interface Props {
  signInWithEmail(email: string, password: string): void
}

const SingIn: React.FC<Props> = ({signInWithEmail}) => {
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
    <div className={styles.signIn}>
      <h2 className={styles.title}>Sign in</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputsSection}>
          <CustomInput
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
            type="text"
            fullWidth
            required
            autoFocus />

          <CustomInput
            name="password"
            label="Password"
            value={password}
            onChange={handleChange}
            type="password"
            fullWidth
            required />
        </div>

        <CustomButton>
          Log in
        </CustomButton>
      </form>

      <AlternativeSignIn />
    </div>
  )
}

export default SingIn
