import React from 'react'

import './mainPage.module.scss'
import { MainPageProps } from '../../containers/MainPageContainer'
import Header from '../../sections/header/Header'
import HeroSection from '../../sections/heroSection/SectionHero'
import BlockSection from '../../sections/blockSection/SectionBlock'
import DeviceSection from '../../sections/deviceSection/SectionDevice'
import FeedbackSection from '../../sections/feedbackSection/SectionFeedback'
import AvailableSection from '../../sections/availableSection/SectionAvailable'
import Footer from '../../sections/footer/Footer'

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <>
      <Header
        user={props.user}
        signOutStart={props.signOutStart}
      />
      <HeroSection />
      <BlockSection />
      <DeviceSection />
      <FeedbackSection />
      <AvailableSection />
      <Footer />
    </>
  )
}

export default MainPage
