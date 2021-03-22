import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import {
  emailSignInStart,
  googleSignInStart
} from '../../redux/user/userActionCreators'

import {UserTypes} from '../../redux/user/userActionTypes'
import SingIn from './SignIn.component'

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithEmail: (email: string, password: string) => {
    dispatch(emailSignInStart({email, password}))
  },
  signInWithGoogle: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SingIn)
