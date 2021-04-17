import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { createStructuredSelector } from 'reselect';

import App from '../App'
import { RootState } from '../redux/store/store';
import { checkUserSession } from '../redux/user/userActionCreators';
import { UserTypes } from '../redux/user/userActionTypes';
import { IUser } from '../redux/user/userInterfaces';
import { selectCurrentUser } from '../redux/user/userSelectors';

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
