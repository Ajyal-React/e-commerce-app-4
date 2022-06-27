import React, { useEffect } from 'react'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from '../../components/Hero/Hero';
import Nav from '../../components/Nav/Nav';
import { Container, MainButton } from '../../global.style';
import {
  useNavigate
} from "react-router-dom";
import { useDispatch } from "react-redux"
import { UserStateSelector } from '../../redux/user/user.selectors';
import Loader from '../../components/Loader/Loader';
import { LoadingSelector } from '../../redux/products/products.selectors';
function Home() {
  const isLoading = LoadingSelector();
  const navigate = useNavigate();
  const userData = UserStateSelector();

  useEffect(() => {
    if(!userData){
        navigate('/Auth/Login');
    }
  }, [userData]);
  return (
    // <div>Home.component</div>
    <Container>
      <Nav/>
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
    </Container>
  )
}

export default Home