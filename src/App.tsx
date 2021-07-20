import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { TodoPageContainerWithrouter } from './Containers/TodoPageContainer';
import NotFound from './components/notFound/NotFound';
import LoginPageContainer from './Containers/LoginPageContainer';
import { useAppSelector } from './Hooks/usePreTypedHooks';

const App = () => {
  const user = useAppSelector((state) => state.user.currentUser)

  if (!user) {
    return <LoginPageContainer />
  }

  return (
    <>
      <Switch>
        <Route exact path='/login' component={LoginPageContainer} />
        <Route exact path='/' component={TodoPageContainerWithrouter} />
        <Route path='/tasks' component={TodoPageContainerWithrouter} />
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
