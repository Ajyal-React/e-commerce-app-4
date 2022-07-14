import React from 'react'
import { AbsoluteContainer, FlexContainerCol, SecondaryContainer, Title1 } from '../../global.style'
import { StartShoppingBtn } from '../../pages/Home/Home.style'
import { ContentContainer, HeroContainer, HeroContent, HeroParagraph, HeroTitle } from './Hero.style'
import { useSelector,useDispatch } from "react-redux"
import { GetOffers } from '../../Redux/products/products.actions'
import { OffersSelector } from '../../Redux/products/products.selectors';

function Hero() {
  const dispatch = useDispatch();
  const {data} = OffersSelector();

  React.useEffect(() => {
    dispatch(GetOffers());
  }, [])

  return (
    <HeroContainer image={data[0]?.imageBanner}>
      <HeroContent>
        <AbsoluteContainer width="24.1rem">
          <article>
             <HeroTitle>
                 {data[0]?.name}
            </HeroTitle>
            <HeroParagraph>
                {data[0]?.description}
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