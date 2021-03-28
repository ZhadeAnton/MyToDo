import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {message} from 'antd'
import {createStructuredSelector} from 'reselect'

import {checkUserSession} from './redux/user/userActionCreators'
import Header from './components/header/Header.container'
import LoginPage from './pages/login/login.page'
import GreetingPage from './pages/greetingPage/greeting.page'
import MainPage from './pages/main/main.page'

import {
  Switch,
  Route,
} from 'react-router-dom'
import {UserTypes} from './redux/user/userActionTypes'
import {RootState} from './redux/store';
import Information from './pages/information/Information';
import {IUser} from './redux/user/userInterfaces'
import {
  selectCurrentUser,
  selectUserError,
  selectUserLoading
} from './redux/user/userSelectors'

interface Props {
  user: IUser | undefined,
  isLoading: boolean,
  error: string | null,
}

interface Functions {
  checkUserSession: () => void
}

const App: React.FC<Props & Functions> = ({
  user,
  isLoading,
  error,
  checkUserSession,
}) => {
  useEffect(() => {
    error ? message.error(error) : null

    checkUserSession()
  }, [error, isLoading])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/greeting' component={GreetingPage}/>
        <Route exact path='/info' component={Information}/>
      </Switch>
    </>
  )
}

const mapStateToProps = createStructuredSelector<RootState, Props>({
  user: selectCurrentUser,
  error: selectUserError,
  isLoading: selectUserLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
