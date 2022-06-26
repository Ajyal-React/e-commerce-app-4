import axios from 'axios';
import React from 'react'
import { FullWidthContainer, SectionsMainParagraph, FullWidthSection, SecondaryContainer, SectionsMainTitle } from '../../global.style'
import SlickSlider from './SlickSlider/SlickSlider';
import { useSelector, useDispatch } from "react-redux";
import { FeaturedProductsStateSelector } from '../../redux/home/home.selectors';
import { GetFeaturedProducts } from '../../redux/home/home.actions';

function FeaturedProducts() {
  const dispatch = useDispatch();
  const data = FeaturedProductsStateSelector();
  React.useEffect(() => {
    dispatch(GetFeaturedProducts());
  }, [])



  return (
    <FullWidthSection>
        <SecondaryContainer width="85%" padding="2rem 0">
          <SectionsMainParagraph>
            DEVICES
          </SectionsMainParagraph>
          <SectionsMainTitle>
            FEATURED PRODUCTS
          </SectionsMainTitle>
          {data.length > 0 && <SlickSlider data={data}></SlickSlider>}
        </SecondaryContainer>
    </FullWidthSection>
  )
}

export default FeaturedProducts