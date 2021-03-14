import React from 'react';
import SimpleTabs from './login-tabs/login-tabs.component';
import Slider from './login-slider/slider.component'
import './login.styles.scss'

const LoginPage: React.FC = () => {
  return (
    <section className="appLogin">
      <div className="appLogin__content row z-depth-3">
        <div className="appLogin__content--slider col s7">
          <Slider />
        </div>

        <div className="appLogin__content--auth col s5">
          <SimpleTabs />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
