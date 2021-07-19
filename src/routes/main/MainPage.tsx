import React from 'react'

import './mainPage.module.scss'
import { MainPageProps } from '../../Containers/MainPageContainer'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/SectionHero'
import BlockSection from '../../components/blockSection/SectionBlock'
import DeviceSection from '../../components/deviceSection/SectionDevice'
import AvailableSection from '../../components/availableSection/SectionAvailable'
import Footer from '../../components/footer/Footer'

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
      <AvailableSection />
      <Footer />
    </>
  )
}

export default MainPage
