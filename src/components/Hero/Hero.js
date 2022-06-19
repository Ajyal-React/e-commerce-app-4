import React from 'react'
import { AbsoluteContainer, FlexContainerCol, SecondaryContainer, Title1 } from '../../global.style'
import { StartShoppingBtn } from '../../pages/Home/Home.style'
import { ContentContainer, HeroContainer, HeroContent, HeroParagraph, HeroTitle } from './Hero.style'
function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <AbsoluteContainer width="24.1rem">
          <article>
             <HeroTitle>
              PLAYSTATION 5
            </HeroTitle>
            <HeroParagraph>
              lightning-fast download speed with super-fast ssd storage
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