import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import * as actions from '../redux/user/userActionCreators'
import {RootState} from '../redux/store/store'
import {UserTypes} from '../redux/user/userActionTypes'
import LoginPage from '../routes/login/LoginPage'
import { UserState } from '../redux/user/userReducer'

interface StateProps {
  isLoading: UserState['isLoading'],
  userError: UserState['userError'],
  user: UserState['currentUser']
}

interface DispatchProps {
  signInWithGoogle: () => void,
  signInWithFacebook: () => void,
  signInWithEmail: (email: string, password: string) => void,
  signUp: (displayName: string, email: string, password: string) => void,
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.user.isLoading,
  userError: state.user.userError,
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithGoogle: () => dispatch(actions.googleSignInStart()),
  signInWithFacebook: () => dispatch(actions.facebookSignInStart()),
  signInWithEmail: (email: string, password: string) => {
    dispatch(actions.emailSignInStart({email, password}))
  },
  signUp: (displayName: string, email: string, password: string) => {
    dispatch(actions.signUpStart({displayName, email, password}))
  }
})

const LoginPageContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export type LoginPageProps = StateProps & DispatchProps
export default LoginPageContainer
