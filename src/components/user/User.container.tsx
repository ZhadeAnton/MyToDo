import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import {signOutStart} from '../../redux/user/userActionCreators'
import UserAvatar from './User.component'
import {UserTypes} from '../../redux/user/userActionTypes'
import {RootState} from '../../redux/store'

const mapStateToProps = (state: RootState) => ({
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signOut: () => dispatch(signOutStart())
})

const UserContainer =
connect(mapStateToProps, mapDispatchToProps)(UserAvatar)

export default UserContainer
