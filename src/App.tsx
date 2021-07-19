import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppProps } from './Containers/AppContainer';
import MainPageContainer from './Containers/MainPageContainer';
import LoginPageContainer from './Containers/LoginPageContainer';
import { TodoPageContainerWithrouter } from './Containers/TodoPageContainer';
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
        <Route exact path='/todo' component={TodoPageContainerWithrouter} />
        <Route exact path='/todo/tasks' component={TodoPageContainerWithrouter} />
        <Route exact path='/todo/unlisted' component={TodoPageContainerWithrouter} />
        <Route exact path='/todo/important' component={TodoPageContainerWithrouter} />
        <Route exact path='/todo/planned' component={TodoPageContainerWithrouter} />
        <Route path='/todo/:listid' component={TodoPageContainerWithrouter} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
};

export default App
