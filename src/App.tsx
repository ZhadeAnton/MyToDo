import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppProps } from './containers/AppContainer';
import MainPageContainer from './containers/MainPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import TodoPageContainer from './containers/TodoPageContainer';
import NotFound from './components/notFound/NotFound';

const App: React.FC<AppProps> = (props) => {
  useEffect(() => {
    props.checkUserSession();
  }, []);

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
        <Route component={NotFound} />
      </Switch>
    </>
  )
};

export default App
