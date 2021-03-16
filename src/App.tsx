import React, {useEffect, useState} from 'react'
import Header from './sections/header/header.component'
import LoginPage from './pages/login/login.page'
import GreetingPage from './pages/greetingPage/greeting.page'
import MainPage from './pages/main/main.page'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {auth, creacteUserProfileDocument} from './firebase/firebase.config'

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<{id: string}>()

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creacteUserProfileDocument(userAuth)

        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
    })
  }, [])

  console.log(currentUser)

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

export default App
