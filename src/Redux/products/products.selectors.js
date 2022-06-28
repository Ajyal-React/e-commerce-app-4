import { useSelector } from "react-redux";
import { ProductsReducerEnum } from "./products.reducers";


export function FeaturedProductsSelector (){
    return useSelector(state => state[ProductsReducerEnum]?.featuredProducts);
}

export function OffersSelector (){
    return useSelector(state => state[ProductsReducerEnum]?.offers);
}

export function LoadingSelector (){
    return useSelector(state => state[ProductsReducerEnum]?.isLoading);
}

export function TrendingProductsSelector (){
    return useSelector(state => state[ProductsReducerEnum]?.trendingProducts);
}
