import { FeaturedCat ,CategoriContainer, CategoriNav, CategoriList, CategoriListLink, CategoriListButton,
  MobileSec , ItemsCat , CatagoriItem , ItemImage , Itemtitel ,ItemName , ItemPrice,SliderCatagori,CatagoriItemSlider}
 from './FeaturedCategories.style';
 
import React from 'react';
import {Image} from "./../../global.style";
// import Diamond from './imagesCaregories/Group 14849.png';
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "https://image-us.samsung.com/us/smartphones/galaxy-s22-ultra/images/gallery/B0-PhantomBlack/FLRC-214-B0-PhantomBlack-01-PDP-GALLERY-1600x1200.jpg?$product-details-jpg$" },
  { url: "https://image-us.samsung.com/us/smartphones/galaxy-s22-ultra/images/gallery/B0-PhantomBlack/FLRC-214-B0-PhantomBlack-01-PDP-GALLERY-1600x1200.jpg?$product-details-jpg$" },

];

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
            <SimpleImageSlider width={450} height={504} images={images} showBullets={true} showNavs={true} />
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