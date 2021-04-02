import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import UserProfile from '../components/userProfile/UserProfile.component'
import {signOutStart} from '../redux/user/userActionCreators'
import {UserTypes} from '../redux/user/userActionTypes'
import {RootState} from '../redux/store/store'
import {IUser} from '../redux/user/userInterfaces'

interface StateProps {
  user: IUser | undefined
}

interface DispatchProps {
  signOut: () => void
}

const mapStateToProps = (state: RootState) => ({
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signOut: () => dispatch(signOutStart())
})

const UserProfileContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)

export type UserProfileProps = StateProps & DispatchProps
export default UserProfileContainer
