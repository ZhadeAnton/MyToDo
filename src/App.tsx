import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { message } from 'antd';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/userActionCreators';
import LoginPage from './routes/login/LoginPage.component';
import MainPage from './routes/main/MainPage.component';

import { Switch, Route } from 'react-router-dom';
import { UserTypes } from './redux/user/userActionTypes';
import { RootState } from './redux/store/store';
import { IUser } from './redux/user/userInterfaces';
import {
  selectCurrentUser,
  selectUserError,
  selectUserLoading,
} from './redux/user/userSelectors';
import TodoPage from './routes/todo/TodoPage.component';
import Header from './sections/headerSection/Header.component';

interface Props {
  user: IUser | undefined;
  isLoading: boolean;
  error: string | null;
}

interface Functions {
  checkUserSession: () => void;
}

const App: React.FC<Props & Functions> = ({
  user,
  isLoading,
  error,
  checkUserSession,
}) => {
  useEffect(() => {
    error ? message.error(error) : null;

    checkUserSession();
  }, [error, isLoading]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/todo/:listid?' component={TodoPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector<RootState, Props>({
  user: selectCurrentUser,
  error: selectUserError,
  isLoading: selectUserLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
