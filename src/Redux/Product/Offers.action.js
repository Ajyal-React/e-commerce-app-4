import axios from "axios";
import {PRODUCTTYPE} from "./PRODUCTTYPE"

export const OfferAction =  () => {
    console.log("Bilal")
   return async (dispatch) => {
       try {

           const res = await axios.get('https://omar-tech-store.herokuapp.com/api/products/offers');
           dispatch({
               type:PRODUCTTYPE.OFFERPRODUCT_SUCCSS,
               payload:res.data
           })
       } catch (error) {
           dispatch({
               type:PRODUCTTYPE.OFFERPRODUCT_FAILD,
               payload:error.res.data
           })
       }
   }
}