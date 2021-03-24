import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {useSnackbar} from 'notistack';

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

interface Props {
  error?: string | null,
  checkUserSession: () => void
}

const App: React.FC<Props> = ({checkUserSession, error}) => {
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    checkUserSession()
    console.log('APP RENDER')
    if (!error) return
    enqueueSnackbar(error, {
      variant: 'error'
    })
  }, [error])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/greeting' component={GreetingPage}/>
      </Switch>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  error: state.user.error,
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserTypes>) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)