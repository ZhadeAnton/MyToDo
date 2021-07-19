import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { RootState } from '../Redux/Store/Store'
import { UserTypes } from '../Redux/User/userActionTypes'
import { signOutStart } from '../Redux/User/userActionCreators'
import { UserState } from '../Redux/User/userReducer'
import MainPage from '../Routes/Main/MainPage'

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
