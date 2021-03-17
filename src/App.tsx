import React, {useEffect} from 'react'
import Header from './sections/header/header.component'
import LoginPage from './pages/login/login.page'
import GreetingPage from './pages/greetingPage/greeting.page'
import MainPage from './pages/main/main.page'
import {connect} from 'react-redux'
import {setUser} from './redux/user/user-actions'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {auth, creacteUserProfileDocument} from './firebase/firebase.config'
interface ISetUser{
  setUser: ({}) => void
}

// eslint-disable-next-line react/prop-types
const App: React.FC<ISetUser> = ({setUser}) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creacteUserProfileDocument(userAuth)

        userRef?.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
    })
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

const mapDispatchToProps =
 (dispatch: (arg0: { type: any; payload: any }) => any) => ({
   setUser: (user: any) => dispatch(setUser(user))
 })

export default connect(null, mapDispatchToProps)(App)
