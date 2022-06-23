import axios from 'axios';
import React from 'react'
import { environment } from '../../environments/environment';
import { FullWidthContainer, SectionsMainParagraph, FullWidthSection, SecondaryContainer, SectionsMainTitle } from '../../global.style'
import SlickSlider from './SlickSlider/SlickSlider';

function FeaturedProducts() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getTrendingProducts();
  }, [])

  const url = environment.baseUrl+'/products/trending-products';
  const getTrendingProducts = () => {
    axios.get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => { alert(err); });
  }

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