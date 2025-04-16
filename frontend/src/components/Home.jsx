import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestEvents from './LatestEvents'
import Footer from './shared/Footer'
import useGetAllEvents from '@/hooks/useGetAllEvents'

const Home = () => {
 useGetAllEvents();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestEvents/>
      <Footer/>
    </div>
  )
}

export default Home
