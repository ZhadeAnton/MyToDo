import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppProps } from './containers/AppContainer';
import MainPage from './routes/main/MainPage.component';
import TodoPageContainer from './containers/TodoPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';

const App: React.FC<AppProps> = (props) => {
  useEffect(() => {
    props.checkUserSession();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/login' component={LoginPageContainer} />
        <Route exact path='/todo' component={TodoPageContainer} />
        <Route exact path='/todo/tasks' component={TodoPageContainer} />
        <Route exact path='/todo/unlisted' component={TodoPageContainer} />
        <Route exact path='/todo/important' component={TodoPageContainer} />
        <Route exact path='/todo/planned' component={TodoPageContainer} />
        <Route path='/todo/:listid' component={TodoPageContainer} />
      </Switch>
    </>
  );
};

export default App
