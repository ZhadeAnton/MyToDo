import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {signUpStart} from '../../redux/user/userActionCreators'
import {UserTypes} from '../../redux/user/userActionTypes'

import SignUp from './SignUp.component'

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signUp: (displayName: string, email: string, password: string) => {
    dispatch(signUpStart({displayName, email, password}))
  }
})

export default connect(null, mapDispatchToProps)(SignUp)
