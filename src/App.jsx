import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {checkUserSession} from './redux/user/userActionCreators'

import Header from './sections/header/header.component'
import LoginPage from './pages/login/login.page'
import GreetingPage from './pages/greetingPage/greeting.page'
import MainPage from './pages/main/main.page'

import {
  Switch,
  Route,
} from 'react-router-dom'

const App = ({checkUserSession}) => {
  useEffect(() => {
    checkUserSession()
  }, [])

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
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(null, mapDispatchToProps)(App)
