import { FeaturedCat ,CategoriContainer, CategoriNav, CategoriList, CategoriListLink, CategoriActiveListLink,
  MobileSec , ItemsCat , CatagoriItem , ItemImage , Itemtitel ,ItemName , ItemPrice,SliderCatagori,CatagoriItemSlider,ItemsFooter}
 from './FeaturedCategories.style';
 import { BsFillStarFill ,BsFillCartCheckFill} from "react-icons/bs";
import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {Image} from "./../../global.style";
import '../Icon.css'
// import Diamond from './imagesCaregories/Group 14849.png';
const images = [
  { url: "./images/Mask Group 28.png" },
  { url: "./images/Group 14849.png"},
  { url: "./images/Group 14849.png" },
  { url: "./images/Group 14849.png" },
  { url: "./images/Group 14849.png" }
];
function FeaturedCategories() {

  return (
    <FeaturedCat>
      <CategoriContainer>
        <CategoriNav>
          <div>
          <Image height="50px" width="200px" src="./images/Group 14849.png"></Image>
          </div>
          <ul>
            <CategoriList> <CategoriActiveListLink>MOBILES</CategoriActiveListLink> </CategoriList>
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
            <Image  src="./images/mobile.png" width="100%" height="200px"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
              <ItemsFooter>
                <div>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                </div>
                <div>
                  <BsFillCartCheckFill className='BsFillCartCheckFill'/>
                </div>
              </ItemsFooter>
            </CatagoriItem>

            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%" height="200px"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
              <ItemsFooter>
                <div>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                </div>
                <div>
                  <BsFillCartCheckFill className='BsFillCartCheckFill'/>
                </div>
              </ItemsFooter>
            </CatagoriItem>

            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%" height="200px"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
              <ItemsFooter>
                <div>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                </div>
                <div>
                  <BsFillCartCheckFill className='BsFillCartCheckFill'/>
                </div>
              </ItemsFooter>
            </CatagoriItem>

            <CatagoriItem>
            <Image  src="./images/mobile.png" width="100%" height="200px"></Image>
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
              <ItemsFooter>
                <div>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                </div>
                <div>
                  <BsFillCartCheckFill className='BsFillCartCheckFill'/>
                </div>
              </ItemsFooter>
            </CatagoriItem>
            
          </ItemsCat>

          <SliderCatagori>
            <CatagoriItemSlider>
            <SimpleImageSlider width={450} height={504} images={images} showBullets={true} showNavs={true} />
              {/* <Image  src="./images/mobile.png" width="100%" height="80%"></Image> */}
              <Itemtitel>
                <ItemName>Dell Laptop</ItemName>
                <ItemPrice>99$</ItemPrice>
              </Itemtitel>
              <ItemsFooter>
                <div>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                  <BsFillStarFill className='BsFillStarFill'/>
                </div>
                <div>
                  <BsFillCartCheckFill className='BsFillCartCheckFill'/>
                </div>
              </ItemsFooter>
            </CatagoriItemSlider>
          </SliderCatagori>
        </MobileSec>

      </CategoriContainer>
     </FeaturedCat>
    
  )
}

export default FeaturedCategories