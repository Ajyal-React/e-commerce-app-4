import React, { useEffect } from 'react'
import { AbsoluteContainer, FlexContainerCol, SecondaryContainer, Title1 } from '../../global.style'
import { StartShoppingBtn } from '../../pages/Home/Home.style'
import { GetOffers } from '../../redux/products/products.actions';
import { ContentContainer, HeroContainer, HeroContent, HeroParagraph, HeroTitle } from './Hero.style';
import { useDispatch } from "react-redux";
import { OffersSelector } from '../../redux/products/products.selectors';
import Loader from '../Loader/Loader';
function Hero() {
  const dispatch = useDispatch();
  const offersData = OffersSelector();


  React.useEffect(() => {
    dispatch(GetOffers());
  }, [])

  console.log("offersData:",offersData)
  return (
    <HeroContainer img={offersData?.imageBanner}>
      <HeroContent>
        <AbsoluteContainer width="24.1rem">
          <article>
            <HeroTitle>
              {offersData?.name}
            </HeroTitle>
            <HeroParagraph>
              {offersData?.description}
            </HeroParagraph>
          </article>
          <StartShoppingBtn>
            Start Shopping  
          </StartShoppingBtn>
        </AbsoluteContainer>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero