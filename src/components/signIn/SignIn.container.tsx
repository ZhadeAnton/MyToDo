import {connect} from 'react-redux'
import {Dispatch, compose} from 'redux'

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/userActionCreators'
import {RootState} from '../../redux/store'
import {UserTypes} from '../../redux/user/userActionTypes'
import SingIn from './SignIn.component'
import WithSpinner from '../UI/customSpinner/CustomSpinner.component'

const mapStateToProps = (state: RootState) => ({
  error: state.user.error,
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithEmail: (email: string, password: string) => {
    dispatch(emailSignInStart({email, password}))
  },
  signInWithGoogle: () => dispatch(googleSignInStart())
})

const SignInContainer = compose<React.FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    WithSpinner
)(SingIn)

export default SignInContainer
