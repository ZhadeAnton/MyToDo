import React from 'react'

import './mainPage.styles.scss'
import HeroSection from '../../sections/heroSection/SectionHero.component'
import BlockSection from '../../sections/blockSection/SectionBlock.component'
import
DeviceSection from '../../sections/deviceSection/SectionDevice.component'
import
FeedbackSection from '../../sections/feedbackSection/SectionFeedback.component'
import
SectionFooter
  from '../../sections/footerSection/SectionFooter.component'
import
AvailableSection
  from '../../sections/availableSection/SectionAvailable.component'

const MainPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BlockSection />
      <DeviceSection />
      <FeedbackSection />
      <AvailableSection />
      <SectionFooter />
    </>
  )
}

export default MainPage
