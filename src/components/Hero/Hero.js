import React from 'react'
import { AbsoluteContainer, FlexContainerCol, SecondaryContainer, Title1 } from '../../global.style'
import { StartShoppingBtn } from '../../pages/Home/Home.style'
import { ContentContainer, HeroContainer, HeroContent, HeroParagraph, HeroTitle } from './Hero.style'
import {useSelector,useDispatch} from "react-redux"
import { GetOffers } from '../../services/products.service'
import { OffersSelector } from '../../redux/products/products.selectors'

function Hero() {
  const dispatch = useDispatch();
  const offersData = OffersSelector();


  React.useEffect(() => {
    dispatch(GetOffers());
  }, [])

    console.log(offersData)

  return (
    <HeroContainer image={offersData?.imageBanner}>
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