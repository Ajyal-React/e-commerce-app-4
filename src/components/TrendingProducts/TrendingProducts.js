import React,{useEffect} from 'react'
import axios from "axios";
import {Container,TitleArea,ImageItem,ItemsArea,Item,NameAndPrice,TexT,Price} from "./TrendingProducts.style";
import {useSelector,useDispatch} from "react-redux"
import { TrendingProductsSelector } from '../../redux/products/products.selectors';
import { GetTrendingProducts } from '../../redux/products/products.actions';

function TrendingProducts(){

    const trendingProducts = TrendingProductsSelector();
    const dispatch = useDispatch();
    console.log("storeProducts:",trendingProducts);


    useEffect( () => {
        dispatch(GetTrendingProducts())
    },[]);

    return (
       <Container>
           <TitleArea>
               <small>Top Products</small>
               <h1>TRENDING THIS WEEK</h1>
           </TitleArea>
           <ItemsArea>
               { trendingProducts?.data?.map( (item,index) => {

                   return (
                   <Item key={index}>
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