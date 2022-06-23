import { FeaturedCat ,CategoriContainer, CategoriNav, CategoriList, CategoriListLink, CategoriListButton,
  MobileSec , ItemsCat , CatagoriItem , ItemImage , Itemtitel ,ItemName , ItemPrice,SliderCatagori,CatagoriItemSlider,
  Sliderimage}
 from './FeaturedCategories.style';
 
import React from 'react';
import {Image} from "./../../global.style";
/*import Diamond from '/images/Group 14850.png';*/


function FeaturedCategories() {
  return (
    <FeaturedCat>
      <CategoriContainer>
        <CategoriNav>
          <div>
          <Image height="80px" src="./images/Group 14849.png"></Image>
          </div>
          <ul>
            <CategoriList> <CategoriListButton>MOBILES</CategoriListButton> </CategoriList>
            <CategoriList> <CategoriListLink>LAPTOPS</CategoriListLink> </CategoriList>
            <CategoriList> <CategoriListLink>PLAYSTATIONS</CategoriListLink> </CategoriList>
            <CategoriList> <CategoriListLink>IPADS</CategoriListLink> </CategoriList>
            <CategoriList> <CategoriListLink>SCREENS</CategoriListLink> </CategoriList>
            <CategoriList> <CategoriListLink>AIRPODS</CategoriListLink> </CategoriList>
          </ul>
        </CategoriNav>

        <MobileSec>
          <ItemsCat>
            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
            </CatagoriItem>

            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
            </CatagoriItem>

            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
            </CatagoriItem>

            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
            </CatagoriItem>
            
          </ItemsCat>

          <SliderCatagori>
            <CatagoriItemSlider>
            <Image  src="./images/mobile.png" width="100%" height="90%"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
            </CatagoriItemSlider>
          </SliderCatagori>
        </MobileSec>

      </CategoriContainer>
     </FeaturedCat>
    
  )
}

export default FeaturedCategories