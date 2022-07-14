import React from 'react'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import { Container, MainButton } from '../../global.style';
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import {
  useNavigate
} from "react-router-dom";
import { UserStateSelector } from '../../Redux/user/user.selectors';
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function Home() {
  const navigate = useNavigate();
  const userData = UserStateSelector();

  React.useEffect(() => {
    if(!userData){
        navigate('/Auth');
    }
  }, [userData]);
  
  return (
    // <div>Home.component</div>
    <Container>
      <Nav/>
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
      <TrendingProducts />
        <FooterComponent />
    </Container>
  )
}

export default Home
