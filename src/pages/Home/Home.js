import React from 'react'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import { MainButton, SecondaryContainer } from '../../global.style';
import "./Home.css";


function Home() {
  return (
    // <div>Home.component</div>
    <SecondaryContainer>
      <Nav/>
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
    </SecondaryContainer>
  )
}

export default Home