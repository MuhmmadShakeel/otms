import React from 'react'
import Header from '../component/home/Header'
import AboutUs from '../component/home/AboutUs'
import WhyChooseUs from '../component/home/WhyChooseUs'
import MyTeam from '../component/home/MyTeam'
import OurServices from '../component/home/OurServices'
import Faq from '../component/home/Faq'

function HomePage() {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <WhyChooseUs/>
      <AboutUs/>
      <MyTeam/>
      <OurServices/>
      <Faq/>
    </div>
  )
}

export default HomePage
