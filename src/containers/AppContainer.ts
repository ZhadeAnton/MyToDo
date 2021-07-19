import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { createStructuredSelector } from 'reselect';

import App from '../App'
import { RootState } from '../Redux/Store/Store';
import { checkUserSession } from '../Redux/User/userActionCreators';
import { UserTypes } from '../Redux/User/userActionTypes';
import { IUser } from '../Redux/User/userInterfaces';
import { selectCurrentUser } from '../Redux/User/userSelectors';

interface StateProps {
  user: IUser | undefined;
}

interface DispatchProps {
  checkUserSession: () => void,
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export type AppProps = StateProps & DispatchProps
export default AppContainer
