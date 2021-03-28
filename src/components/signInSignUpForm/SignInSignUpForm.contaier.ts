import {connect} from 'react-redux'
import {Dispatch, compose} from 'redux'

import {
  emailSignInStart,
  signUpStart,
  signUpFailure
} from '../../redux/user/userActionCreators'
import {RootState} from '../../redux/store'
import {UserTypes} from '../../redux/user/userActionTypes'
import signInSignUpForm from './SignInSignUpForm.component'

const mapStateToProps = (state: RootState) => ({
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithEmail: (email: string, password: string) => {
    dispatch(emailSignInStart({email, password}))
  },
  signUp: (displayName: string, email: string, password: string) => {
    dispatch(signUpStart({displayName, email, password}))
  },
  signUpFailure: (error: string) => {
    dispatch(signUpFailure(error))
  }
})

const SignInSignUpFormContainer = compose<React.FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
)(signInSignUpForm)

export default SignInSignUpFormContainer
