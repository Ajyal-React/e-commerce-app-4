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
import { UserStateSelector } from '../../redux/user/user.selectors';

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
    </Container>
  )
}

export default Home