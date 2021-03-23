import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {RootState} from '../../redux/store'
import {
  signUpStart,
  signUpFailure,
  clearError
} from '../../redux/user/userActionCreators'
import {UserTypes} from '../../redux/user/userActionTypes'

import SignUp from './SignUp.component'

const mapStateToProps = (state: RootState) => ({
  error: state.user.error
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signUp: (displayName: string, email: string, password: string) => {
    dispatch(signUpStart({displayName, email, password}))
  },
  signUpFailure: (error: string) => {
    dispatch(signUpFailure(error))
  },
  clearError: () => {
    dispatch(clearError())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
