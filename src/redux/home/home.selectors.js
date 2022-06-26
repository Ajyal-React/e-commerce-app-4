import { useSelector } from "react-redux";
import { FeaturedProductsReducerEnum } from "./homeReducers/homeReducers";

// export const HomeReducerEnums ={
//     FeaturedProductsReducer: "FeaturedProducts"
// };

export function FeaturedProductsStateSelector (){
    return useSelector(state => state[FeaturedProductsReducerEnum]);
}