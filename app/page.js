import HeaderSlider from '@/components/HeaderSlider'
import HomeProducts from '@/components/HomeProducts'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
      </div>
    </div>
  )
}

export default Home