import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { TodoPageContainerWithrouter } from './containers/TodoPageContainer';
import { IAppContainer } from './containers/AppContainer';
import NotFound from './components/notFound/NotFound';
import Header from './components/Header/Header';
import LoginPageContainer from './containers/LoginPageContainer';

const App = (props: IAppContainer) => {
  if (!props.user) {
    return <LoginPageContainer />
  }

  return (
    <>
      <Header
        user={props.user}
        onSignOut={props.handleSignOut}
      />

      <Switch>
        <Route exact path='/login' component={LoginPageContainer} />
        <Route exact path='/' component={TodoPageContainerWithrouter} />
        <Route path='/todos' component={TodoPageContainerWithrouter} />
        <Route path='/unlisted' component={TodoPageContainerWithrouter} />
        <Route path='/important' component={TodoPageContainerWithrouter} />
        <Route path='/planned' component={TodoPageContainerWithrouter} />
        <Route path='/:listid' component={TodoPageContainerWithrouter} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
};

export default App
