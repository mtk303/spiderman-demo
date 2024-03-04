import React, { useState } from 'react'
import '../../assets/css/user/home.css';

import HomeFooter from '../../components/User/HomeFooter';
import CategoriesAndWinner from '../../components/User/CategoriesAndWinner';
import Footer from '../../components/User/Footer';
import Platform from '../../components/User/Platform';
import Hero from '../../components/User/Hero';


export default function Home() {
  const [activeCategory,setActiveCategory]=useState('Home');

  return (
      <div className='text-black homeBody'>
        <Hero />
        <HomeFooter/>
        {/* Remove the wrapper div if want to set sticky top 0 for categories and winner */}
        <div style={{position:'sticky'}}>
          <CategoriesAndWinner
          activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}  />
        </div>
        
        <Footer/>
        <Platform/>
      </div>
  )
}
