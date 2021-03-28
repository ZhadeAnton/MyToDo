import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {RootState} from '../../redux/store'

import {
  googleSignInStart,
  facebookSignInStart
} from '../../redux/user/userActionCreators'

import {UserTypes} from '../../redux/user/userActionTypes'
import AlternativeSignIn from './AlternativeSignIn.component'

const mapStateToProps = (state: RootState) => ({
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithFacebook: () => dispatch(facebookSignInStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(AlternativeSignIn)
