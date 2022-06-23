import React,{useEffect} from 'react'
import axios from "axios";
import {Container,TitleArea,ImageItem,ItemsArea,Item,NameAndPrice,TexT,Price} from "./TrendingProducts.style";


function TrendingProducts(){

    const [state,setState] = React.useState([]);

    const getProduct = async () =>  {
        const res = await axios.get("https://omar-tech-store.herokuapp.com/api/products/trending-products");
        setState(res.data)
    }

    useEffect(() => {
         getProduct();
        return () => {
            console.log("This will be logged on unmount");
        }
    },[]);

    return (
       <Container>
           <TitleArea>
               <small>Top Products</small>
               <h1>TRENDING THIS WEEK</h1>
           </TitleArea>
           <ItemsArea>
               { state.map( (item,index) => {

                   return (
                   <Item>
                       <div>
                           <ImageItem src={item.images}/>
                       </div>
                       <NameAndPrice>
                           <TexT>{item.name}</TexT>
                           <Price>
                               <TexT>${item.price}</TexT>
                           </Price>
                       </NameAndPrice>
                   </Item>
                   )
               })
               }
           </ItemsArea>

       </Container>
    )
}

export default TrendingProducts