import React,{useEffect} from 'react'
import axios from "axios";
import {Container,TitleArea,ImageItem,ItemsArea,Item,NameAndPrice,TexT,Price} from "./TrendingProducts.style";
import {useSelector,useDispatch} from "react-redux"
import {TrendingProductAction} from "../../Redux/Product/TrendingProduct.action";

function TrendingProducts(){

    const [state,setState] = React.useState([]);
    const storeProducts = useSelector(store => store.ProductReducer.products)
    const dispatch = useDispatch()


    useEffect( () => {
        dispatch(TrendingProductAction())
        setState([...storeProducts?.values()])
    },[]);

    return (
       <Container>
           <TitleArea>
               <small>Top Products</small>
               <h1>TRENDING THIS WEEK</h1>
           </TitleArea>
           <ItemsArea>
               { state?.map( (item,index) => {

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