import { useSelector } from "react-redux";

export function FeaturedProductsSelector (){
    return useSelector(state => state?.Products?.featuredProducts);
}

export function OffersSelector (){
    return useSelector(state => state?.Products?.offers);
}

export function LoadingSelector (){
    return useSelector(state => state?.Products?.isLoading);
}

export function TrendingProductsSelector (){
    return useSelector(state => state?.Products?.trendingProducts);
}
