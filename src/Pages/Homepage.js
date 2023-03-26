import React from 'react'
import Header from '../Components/Header/Header'
import TrendingServices from '../Components/TrendingServices/TrendingServices'
import SmaeDayServices from '../Components/SameDayServices/SmaeDayServices'
import Adds from '../Components/Adds/Adds'
import ProfessionalCleaningServices from '../Components/ProfessionalCleaningServices/ProfessionalCleaningServices'
import MostUsedServices from '../Components/MostUsedServices/MostUsedServices'
import AssuredPeaceOfMind from '../Components/AssuredPeaceOfMind/AssuredPeaceOfMind'
import Trending_Services from '../Components/Trending_Services/Trending_Services'
import HomeApplicationServices from '../Components/HomeApplicationServices/HomeApplicationServices'
import Adds2 from '../Components/Adds2/Adds2'
import ChooseUs from '../Components/ChooseUs/ChooseUs'
import CustomersSay from '../Components/CustomersSay/CustomersSay'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
  return (
    <div className='Homepage'>
      <Header/>
      <TrendingServices/>
      <SmaeDayServices/>
      <Adds/>
      <ProfessionalCleaningServices/>
      <MostUsedServices/>
      <AssuredPeaceOfMind/>
      <Trending_Services/>
      <HomeApplicationServices/>
      <Adds2/>
      <ChooseUs/>
      <CustomersSay/>
      <Footer/>
    </div>
  )
}

export default Homepage
