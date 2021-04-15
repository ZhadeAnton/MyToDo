import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import AuthForm from '../components/form/authForm/AuthForm.component'

import {
  emailSignInStart,
  signUpStart,
} from '../redux/user/userActionCreators'

import {RootState} from '../redux/store/store'
import {UserTypes} from '../redux/user/userActionTypes'

interface StateProps {
  isLoading: boolean
}

interface DispatchProps {
  signInWithEmail: (email: string, password: string) => void,
  signUp: (displayName: string, email: string, password: string) => void,
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.user.isLoading,
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signInWithEmail: (email: string, password: string) => {
    dispatch(emailSignInStart({email, password}))
  },
  signUp: (displayName: string, email: string, password: string) => {
    dispatch(signUpStart({displayName, email, password}))
  }
})

const AuthFormContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(AuthForm)

export type AuthFormProps = StateProps & DispatchProps
export default AuthFormContainer
