import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {RootState} from '../redux/store/store'

import AltSignIn from '../components/form/altSignIn/AltSignIn.component'

import {
  googleSignInStart,
  facebookSignInStart
} from '../redux/user/userActionCreators'

import {UserTypes} from '../redux/user/userActionTypes'

interface StateProps {
  isLoading: boolean
}

interface DispatchProps {
  signInWithGoogle: () => void,
  signInWithFacebook: () => void,
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithFacebook: () => dispatch(facebookSignInStart())
})

const AltSignInContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(AltSignIn)

export type AltSignInProps = StateProps & DispatchProps
export default AltSignInContainer
