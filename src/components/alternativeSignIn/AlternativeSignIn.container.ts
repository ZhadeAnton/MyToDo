import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import {
  googleSignInStart,
  facebookSignInStart
} from '../../redux/user/userActionCreators'

import {UserTypes} from '../../redux/user/userActionTypes'
import AlternativeSignIn from './AlternativeSignIn.component'

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart())
})

export default connect(null, mapDispatchToProps)(AlternativeSignIn)