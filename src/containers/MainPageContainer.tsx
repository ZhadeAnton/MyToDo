import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { RootState } from '../redux/store/store'
import { UserTypes } from '../redux/user/userActionTypes'
import { signOutStart } from '../redux/user/userActionCreators'
import { UserState } from '../redux/user/userReducer'
import MainPage from '../routes/main/MainPage'

interface StateProps {
  user: UserState['currentUser']
}

interface DispatchProps {
  signOutStart: () => void,
}

const mapStateToProps = (state: RootState) => ({
  user: state.user.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  signOutStart: () => dispatch(signOutStart())
})

const MainPageContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)

export type MainPageProps = StateProps & DispatchProps
export default MainPageContainer
