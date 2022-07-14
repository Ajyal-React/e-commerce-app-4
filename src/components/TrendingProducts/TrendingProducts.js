import React,{useEffect} from 'react'
import axios from "axios";
import {Container,TitleArea,ImageItem,ItemsArea,Item,NameAndPrice,TexT,Price} from "./TrendingProducts.style";
import {useSelector,useDispatch} from "react-redux"
import { TrendingProductsSelector } from '../../Redux/products/products.selectors';
import { GetTrendingProducts } from '../../Redux/products/products.actions';
import {Link} from 'react-router-dom'

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
                           <Link to={"/product"}> <TexT>{item.name}</TexT></Link>
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