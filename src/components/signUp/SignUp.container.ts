import {connect} from 'react-redux'
import {Dispatch, compose} from 'redux'
import {RootState} from '../../redux/store'
import {
  signUpStart,
  signUpFailure
} from '../../redux/user/userActionCreators'
import {UserTypes} from '../../redux/user/userActionTypes'
import WithSpinner from '../UI/customSpinner/CustomSpinner.component'

import SignUp from './SignUp.component'

const mapStateToProps = (state: RootState) => ({
  error: state.user.error,
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signUp: (displayName: string, email: string, password: string) => {
    dispatch(signUpStart({displayName, email, password}))
  },
  signUpFailure: (error: string) => {
    dispatch(signUpFailure(error))
  }
})

const SignUpContainer = compose<React.FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    WithSpinner
)(SignUp)

export default SignUpContainer
