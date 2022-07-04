import React from 'react'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import { Container, MainButton } from '../../global.style';
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import FooterComponent from '../../components/FooterComponent/FooterComponent'


function Home() {
  return (
    // <div>Home.component</div>
    <Container>
      <Nav/>
      <Hero/>
       <FeaturedCategories/>
      {/* <FeaturedProducts/> */}
        <TrendingProducts />
        <FooterComponent/>
    </Container>
    
  )
}

export default Home