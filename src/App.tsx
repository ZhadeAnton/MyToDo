import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppProps } from './Containers/AppContainer';
import { TodoPageContainerWithrouter } from './Containers/TodoPageContainer';
import NotFound from './components/notFound/NotFound';
// import LoginPageContainer from './Containers/LoginPageContainer';

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={TodoPageContainerWithrouter} />
        <Route exact path='/tasks' component={TodoPageContainerWithrouter} />
        <Route exact path='/unlisted' component={TodoPageContainerWithrouter} />
        <Route exact path='/important' component={TodoPageContainerWithrouter} />
        <Route exact path='/planned' component={TodoPageContainerWithrouter} />
        {/* <Route exact path='/login' component={LoginPageContainer} /> */}
        <Route path='/:listid' component={TodoPageContainerWithrouter} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
};

export default App
