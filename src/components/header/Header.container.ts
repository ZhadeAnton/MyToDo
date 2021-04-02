import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import Header from './Header.component'
import {UserTypes} from '../../redux/user/userActionTypes'
import {signOutStart} from '../../redux/user/userActionCreators'
import {RootState} from '../../redux/store'

const mapStateToProps = (state: RootState) => ({
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
