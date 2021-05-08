import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppProps } from './containers/AppContainer';
import MainPageContainer from './containers/MainPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import TodoPageContainer from './containers/TodoPageContainer';

const App: React.FC<AppProps> = (props) => {
  useEffect(() => {
    props.checkUserSession();
  }, []);

  if (!!props.user) {
    <Redirect to='/login' />
  }

  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPageContainer} />
        <Route exact path='/login' component={LoginPageContainer} />
        <Route exact path='/todo' component={TodoPageContainer} />
        <Route exact path='/todo/tasks' component={TodoPageContainer} />
        <Route exact path='/todo/unlisted' component={TodoPageContainer} />
        <Route exact path='/todo/important' component={TodoPageContainer} />
        <Route exact path='/todo/planned' component={TodoPageContainer} />
        <Route path='/todo/:listid' component={TodoPageContainer} />
      </Switch>
    </>
  )
};

export default App
