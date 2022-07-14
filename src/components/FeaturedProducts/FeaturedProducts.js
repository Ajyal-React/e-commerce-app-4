import axios from 'axios';
import React from 'react'
import { FullWidthContainer, SectionsMainParagraph, FullWidthSection, SecondaryContainer, SectionsMainTitle } from '../../global.style'
import SlickSlider from './SlickSlider/SlickSlider';
import { useDispatch } from "react-redux";
import { FeaturedProductsSelector } from '../../Redux/products/products.selectors';
import { GetFeaturedProducts } from '../../Redux/products/products.actions';

function FeaturedProducts() {
  const dispatch = useDispatch();
  const data = FeaturedProductsSelector();
  console.log("data:", data);

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
          {!!data && !data?.error?.isError && <SlickSlider data={data.data}></SlickSlider>}
        </SecondaryContainer>
    </FullWidthSection>
  )
}

export default FeaturedProducts