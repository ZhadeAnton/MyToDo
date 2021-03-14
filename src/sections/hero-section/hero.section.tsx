import React from 'react'
import './hero.styles.scss'
import phone from '../../assets/phone.jpg'

const HeroSection: React.FC = () => {
  return (
    <section className="section-hero row">
      <div className="container">
        <div className="section-hero__desc col s6 center-align">

          <h1 className="section-hero__desc--title">
            A to-do lost you&#39;d actually use
          </h1>

          <h6 className="section-hero__desc--text">
            With award winning design and powerful features, Any.do is the
            to-do list you would actually stick to. Designed to help you
            get organized, achieve your goals and never forget a thing.
          </h6>

          <a className="waves-effect waves-light btn-large">
            Get Started - It&#39;s Free!
          </a>
        </div>

        <div className="section-hero__phone col s6 ">
          <img src={phone} alt="phone"
            className="section-hero__phone--img responsive-img"/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
