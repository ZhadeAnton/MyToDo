import React from 'react'

import './main.styles.scss'
import HeroSection from '../../sections/hero-section/SectionHero.component'
import BlockSection from '../../sections/block-section/SectionBlock.component'
import
DeviceSection from '../../sections/device-section/SectionDevice.component'
import
FeedbackSection from '../../sections/feedback-section/SectionFeedback.component'

const MainPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BlockSection />
      <DeviceSection />
      <FeedbackSection />
    </>
  )
}

export default MainPage
