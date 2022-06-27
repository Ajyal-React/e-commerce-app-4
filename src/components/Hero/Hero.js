import React, {useEffect} from 'react'
import { AbsoluteContainer, FlexContainerCol, SecondaryContainer, Title1 } from '../../global.style'
import { StartShoppingBtn } from '../../pages/Home/Home.style'
import { ContentContainer, HeroContainer, HeroContent, HeroParagraph, HeroTitle } from './Hero.style'
import {useSelector,useDispatch} from "react-redux"
import {OfferAction} from "../../Redux/Product/Offers.action"

function Hero() {
    const storeOffers = useSelector(store => store.ProductReducer.offers[0])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(OfferAction())
    },[])

    console.log(storeOffers)

  return (
    <HeroContainer image={storeOffers?.imageBanner}>
      <HeroContent>
        <AbsoluteContainer width="24.1rem">
          <article>
             <HeroTitle>
                 {storeOffers?.name}
            </HeroTitle>
            <HeroParagraph>
                {storeOffers?.description}
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