import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import {
  emailSignInStart,
  googleSignInStart
} from '../../redux/user/userActionCreators'
import {RootState} from '../../redux/store'
import {UserTypes} from '../../redux/user/userActionTypes'
import SingIn from './SignIn.component'

const mapStateToProps = (state: RootState) => ({
  error: state.user.error
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithEmail: (email: string, password: string) => {
    dispatch(emailSignInStart({email, password}))
  },
  signInWithGoogle: () => dispatch(googleSignInStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)
