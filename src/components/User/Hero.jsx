import React, { useState } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import HeroSideBar from './HeroSidebar'



const Hero = () => {

  return (
    <div className='hero'>
      <marquee >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quaerat, accusantium sequi, repellendus iusto maxime tenetur soluta voluptatibus, animi adipisci veniam! Non pariatur ipsa nobis laboriosam, ducimus porro eveniet doloribus.
      </marquee>
      <Navbar />
      <Banner/>
      <HeroSideBar/>
      
      
      
    </div>
  )
}

export default Hero
