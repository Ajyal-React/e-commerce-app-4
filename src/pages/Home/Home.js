import React from 'react'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import { Container, MainButton } from '../../global.style';


function Home() {
  return (
    // <div>Home.component</div>
    <Container>
      <Nav/>
      <Hero/>
      {/* <FeaturedCategories/> */}
      {/* <FeaturedProducts/> */}
    </Container>
  )
}

export default Home