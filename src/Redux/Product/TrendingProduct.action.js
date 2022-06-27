import axios from "axios";
import {PRODUCTTYPE} from "./PRODUCTTYPE"

export const TrendingProductAction = () => {
    console.log("Bilal")
    return async (dispatch) => {
        try{
            const res = await axios.get("https://omar-tech-store.herokuapp.com/api/products/trending-products")
            dispatch({
                type:PRODUCTTYPE.TRENDINGPRODUCT_SUCCSS,
                payload:res.data,
            })
        }catch (error){
            dispatch({
                type:PRODUCTTYPE.TRENDINGPRODUCT_FAILD,
                payload:error.res.data,
            })
        }
    }
}